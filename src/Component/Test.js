import { useState } from "react"
import { Button } from "reactstrap"
import { ToastContainer, toast } from 'react-toastify';

export default function Test() {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count+1)
    }

    function reset() {
        setCount(0)
        toast("Reset to 0!")
    }

    return (
        <div>
            <Button outline color="primary" onClick={handleCount}>Count : {count}</Button>
            <Button outline color="success" onClick={reset}>Reset</Button>
            <ToastContainer />
        </div>
    )
}