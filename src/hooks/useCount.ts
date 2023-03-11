import { useState } from 'react'
import { baseApi } from '../api/count.api'

interface CountDto {
  count: number
}

export const useCount = () => {
  const [click, setClick] = useState<number>(0)
  const [serverCount, setServerCount] = useState(click)
  const [isLoading, setIsLoading] = useState(false)
  const [currentTimerId, setCurrentTimerId] = useState<NodeJS.Timeout | null>(
    null
  )
  const [isError, setIsError] = useState(false)

  const getServerCount = async () => {
    try {
      setIsLoading(true)
      const response = await baseApi.post<CountDto>('/button_count', {
        count: click + 1,
      })
      setServerCount(response.data.count)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClick = () => {
    setClick((prev) => prev + 1)
    currentTimerId && clearTimeout(currentTimerId)
    const timerId = setTimeout(() => {
      getServerCount()
    }, 1000)
    setCurrentTimerId(timerId)
  }

  return { serverCount, click, isLoading, isError, handleClick }
}
