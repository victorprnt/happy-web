// This is a function that returns HTML or JSX
import React from 'react';

import "./styles/global.css"

// JSX - JavaScriptXML
// TSX - TypeScriptXML

// This is an interface
interface TitleProps {
  text: string;
}

// This a React component, a structure which can be used repeatedly throughout the code
function Title(props:TitleProps) {
  return (
    <h1>{props.text}</h1>
  )
}

function App() {
  return ( 
    // Normally we would use "class" ass an HTML attribute, but class is a JS reserved word. 
    // Thats why we use "className"
    <div className="App">
      <Title text="Title 1"/> // This is a propoerty, something you can pass to a component
      <Title text="Title 2"/>
      <Title text="Title 3"/>
    </div>
  );
}

export default App;
