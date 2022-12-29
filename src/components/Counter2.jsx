import {useState} from 'react';

const Counter2 = () => {
    const [count, setCount] = useState(0);
    const handelClick=()=>setCount(count + 1);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handelClick}>
        Click me
      </button>
    </div>
  );
}

export default Counter2;