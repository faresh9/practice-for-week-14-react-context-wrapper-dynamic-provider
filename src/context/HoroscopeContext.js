import { createContext, useState } from 'react';

export const HoroscopeContext = createContext();


const HoroscopeProvider = props =>{
  const 
  return(
    <HoroscopeContext.Provider>
    {props.children}
  </HoroscopeContext.Provider>
  );
}

export default HoroscopeProvider;
