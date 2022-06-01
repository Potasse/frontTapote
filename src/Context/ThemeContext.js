import React from "react";

const ThemeContext = React.createContext(({
  
    connect: false,
    setConnect: (connect) => {}

  }));
export default ThemeContext;