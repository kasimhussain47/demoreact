import React from 'react'
import Buttons1 from './Buttons1';
import { useState } from 'react';
import { Content } from './Content';


const Section = () => {
  const [click, setClick] = useState("");
  // let tabContent = "please click button"

  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    // tabContent = selectedButton
    setClick(selectedButton);
  }
  return (
    <div>
      <div className="App">
        {/* <Examples /> */}
        <div style={{backgroundColor: "blue",display:"flex" , justifyContent:"center" , marginTop:"50px" }}>

        <Buttons1 isSelected={click === 'components'} onClick={() => handleSelect('components')}>Component</Buttons1>
        &nbsp; &nbsp;
        <Buttons1 isSelected={click === 'jsx'} onClick={() => handleSelect('jsx')}>Jsx</Buttons1>
        &nbsp; &nbsp;
        <Buttons1 isSelected={click === 'state'} onClick={() => handleSelect('state')}>State</Buttons1>
        &nbsp; &nbsp;
        </div>
      </div>
      {!click ? 
      <h1>please select any button</h1> 
      :null
      }
      <h1 style={{textAlign:"center"}}>{Content[click]?.title}</h1>
      <div style={{justifyContent:"center",display:"flex"}}>
      <section style={{textAlign:"center",width:"50%"}}>{Content[click]?.description}</section>
      
      </div>
    </div>
  )
}

export default Section
