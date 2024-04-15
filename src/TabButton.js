import React from 'react'

const TabButton = (props) => {
    // console.log(props.title)
    function handleClick () {

    }
  return (
    <div>
        <button>
        {props.title}
        </button>
        <p>{props.description}</p>
  
      
    </div>
  )
}

export default TabButton;
