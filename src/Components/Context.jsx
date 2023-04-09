import {createContext, useState } from "react";

export const mainContext = createContext()

function MainProvider({ children }) {

    const [CurrentValue, setCurrentValue] = useState("")
    const [currentList, setcurrentList] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [isEditing, setIsEditing] = useState(null);
    const [toggleButton, settoggleButton] = useState(true)

    return (
        <mainContext.Provider
            value={
                {
                    CurrentValue, setCurrentValue,
                    currentList, setcurrentList,
                    disabled, setDisabled,
                    isEditing, setIsEditing,
                    toggleButton, settoggleButton

                }
            }>{children}</mainContext.Provider>
    )
}
export default MainProvider;