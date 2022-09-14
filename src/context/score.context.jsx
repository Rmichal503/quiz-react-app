import { createContext, useState } from "react";

export const ScoreContext = createContext({
    currentScore: 0,
    setCurrentScore: ()=> null,
});

export const ScoreProvider = ({children}) =>{
    const [currentScore, setCurrentScore] = useState(null);
    const value = {currentScore, setCurrentScore};


    return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
}