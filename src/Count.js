import React from 'react'
import { useState } from 'react';
const Count = () => {
    const [click ,setClick] = useState(0);

    function handleClick() {
        // setClick( click + 1)
        setClick(prevCount => prevCount + 1);
        console.log(click);
    }

    const incrementCount = () => {
      };
    // function handleChange() {
    //     console.log()
    //     }
    
  return (
    <div>
      <button onChange={incrementCount} onClick={handleClick}>count</button>
      {/* {click} */}
    </div>
  )
}

export default Count
