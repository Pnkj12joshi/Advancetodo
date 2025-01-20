import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({children})=>{
    const storedTheme = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState("light"); 
    const [tasks, setTasks] = useState([]);
    const [impotask, setimpotask] = useState([]);

    useEffect(()=>{
     document.body.classList.remove("light", "dark");
     document.body.classList.add(theme);
    localStorage.setItem("theme",theme);
    },[theme]);

    const toggletheme =()=>{
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
const ContextValue = {theme,toggletheme, tasks,setTasks,impotask,setimpotask}
return(
    <Context.Provider  value={ContextValue}>
       {children}
    </Context.Provider>
)
}

export default ContextProvider;