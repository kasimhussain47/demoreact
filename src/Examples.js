import React from 'react'
import TabButton from './TabButton'
// import{ Content }from './Content';
import Tabs from './Tabs';
import{ TabContent }from './Content';

const Examples = () => {
    console.log(TabContent)
function handleSelect () {
    console.log("hello");
}
  return (
    <div>
        <h1>Examples</h1>

 <div  style={{display:"flex" , justifyContent:"center" , }} >

  <Tabs buttonsContainer="menu"
  buttons={<>
     <TabButton onSelect={() => handleSelect} title={TabContent[0].title}
    //  description={TabContent[0].description}
     />
        &nbsp;
        {/* <TabButton {...TabContent[1]}/>  // ----->>>>> or method  */}
        <TabButton title={TabContent[1].title}/>
     &nbsp;
       <TabButton title={TabContent[2].title}
    //  description={TabContent[2].description} 
     /> 
     
     </>}>
      {{TabContent}}
      </Tabs>
     {/* <TabButton onSelect={() => handleSelect} title={Content.components.title}
     description={Content.components.description}/>
        &nbsp;
        <TabButton {...Content.jsx}/>
     &nbsp;
       <TabButton title={Content.state.title}
     description={Content.state.description}/>       for getting object we use dot "." ,  */}
    </div>                                           {/* for array we use "[]" */}
      
    </div>
  )
}

export default Examples;
