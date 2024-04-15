import React from "react";

const Tabs = ({
  buttons,
  children,
  buttonsContainer,
  // buttonsContainer="menu"    <-------we also use by this type
}) => {
  // console.log(children.TabContent)
  const ButtonsContainer = buttonsContainer;
  // or you can use pass props as ButtonsContainer after that you dont have to define   "const ButtonsContainer = buttonsContainer"
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      <menu>
        {children.TabContent.map((val) => {
          // console.log(val.title)
          return val.description;
        })}
      </menu>
    </>
  );
};

export default Tabs;
