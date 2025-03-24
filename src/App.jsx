import React from "react";
import Sidebar from "./Component/Sidebar/Sidebar";
import Hero from "./Component/Hero/Hero";
import ContextProvider from "./context/context";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Sidebar />
        <Hero />
      </ContextProvider>
    </>
  );
};

export default App;
