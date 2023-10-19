import React, {useState} from 'react';

const Counter = function (){
    //Это хуки
    const [count, steCount] = useState(0)

    function increment() {
        steCount(count + 1)
    }

    function decrement() {
        steCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> Increment</button>
            <button onClick={decrement}> Decrement</button>
        </div>
    )
}
export default Counter;