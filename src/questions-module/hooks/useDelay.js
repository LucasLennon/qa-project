import React, { useEffect, useMemo, useState } from 'react'

const useDelay = (delay) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      return setTimeout(() => {
        setLoading(false)
      }, delay)
    }
  }, [loading])

  const handleDelayedMethod = (callback) => {
    setLoading(true)
    setTimeout(() => {
      callback()
    }, delay)
  }

  return [loading, handleDelayedMethod]
}

export default useDelay
