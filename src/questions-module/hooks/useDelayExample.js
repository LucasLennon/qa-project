import React from 'react'

import useDelay from './useDelay'

function useDelayExample() {
  const [loading, handleDelay] = useDelay(5000)
  const startDelayMethod = () => handleDelay(() => {})
  return (
    <div>
      <p>Is loading: {String(loading)}</p>
      <button onClick={startDelayMethod}>Submit delay method</button>
    </div>
  )
}

export default useDelayExample
