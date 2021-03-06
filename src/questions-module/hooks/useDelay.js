import React, { useMemo, useState } from 'react'

const useDelay = (delay) => {
  const [loading, setLoading] = useState(false)

  const handleDelayedMethod = (callback) => {
    new Promise((resolve) => {
      setLoading(true)
      setTimeout(() => {
        callback()
        setLoading(false)
      }, delay)
    })
  }

  return [loading, handleDelayedMethod]
}

export default useDelay
