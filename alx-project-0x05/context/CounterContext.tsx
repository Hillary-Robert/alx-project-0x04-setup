import { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextProps{
  count: number
  increment: ()=>void
  decrement: ()=>void
}



export const countContext = createContext<CounterContextProps | undefined>(undefined)


export const CounterProvider = ({children} : {children: ReactNode}) => {
  const [count, setCount] = useState<number>(0)

  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    setCount(count + 1)
  }

  return(
    <countContext.Provider value={{count, increment, decrement}}>
      {children} 
    </countContext.Provider>
  )
}


export const useCount = ()=>{
  const context = useContext(countContext)


  if(!context){
    throw new Error("useCount must be within a count provider")
  }

  return context
}