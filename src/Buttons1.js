import React from 'react'

function Buttons1 ({children ,isSelected,...props}) // onSelect  ---->  instead of onSelect we can use ...props to click on button
   {
  return (
    <div>
            <button className={isSelected ? 'active' : null} style={{backgroundColor: "" }} {...props} > {/*  `onClick={onSelect}` ---> we use {...props} */}
              {children} 
              {/* difference btw props and Children given below >>>>>>>> */}
              </button>
    </div>
  )
}

export default Buttons1

{/* 

Passing text for a button as props .......


<TextComponent title="Save"/>

function TextComponent(props){
  return <button>{props.title}<button/>
} */}                                                // <<<<< ----- this is for props 

// Passing text as a child .........

// <TextComponent>Save<TextComponent />

// function TextComponent(props){
//   return <button>{props.children}<button/>      
// }                                                    // <<<<< ----- this is for children 