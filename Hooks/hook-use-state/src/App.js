import { useState } from 'react'
function App() {
  function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
    const increase = () => {
      setCount(count + addAmount)
    }
    return [count, increase]

  }
  const [firstCount, setFirstCount] = useIncrement(1);
  const [secondCount, setSecondCount] = useIncrement(2);

  return (
    <div>
      <div>
        <p>Count :{firstCount}</p>
        <button onClick={setFirstCount}>Add 1
        </button>
      </div>
      <div>
        <p>Count :{secondCount}</p>
        <button onClick={setSecondCount}>Add 2
        </button>
      </div>
    </div>
  )
}

export default App