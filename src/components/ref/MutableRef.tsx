import { useEffect, useRef, useState } from "react"

const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const timerRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current)
    }
  }

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => stopTimer()

  }, [])


  return (
    <div>
        Hook timer - {timer}
        <button onClick={() => stopTimer()}>Stop timer</button>
    </div>
  )
}

export default MutableRef
