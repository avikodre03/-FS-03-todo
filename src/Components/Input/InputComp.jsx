import React from 'react'
import './Input.css';
import { mainContext } from '../Context';
import { useContext } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { GrUpdate } from 'react-icons/gr';

const InputComp = () => {
    const {
        CurrentValue, setCurrentValue,
        currentList, setcurrentList,
        disabled, setDisabled,
        toggleButton, settoggleButton,
        isEditing, setIsEditing
    } = useContext(mainContext)

    const Addme = () => {
        if (!toggleButton) {
            setcurrentList(currentList.map((ele) => {
                if (ele.id === isEditing) {
                    return { ...ele, CurrentValue }
                }
                return ele
            }))
            setCurrentValue("")
            settoggleButton(true)
            setIsEditing(null)
        } else {
            setcurrentList([...currentList, { CurrentValue: CurrentValue, id: Date.now() }])
            setCurrentValue("")
            setDisabled(true)
        }
    }

    return (
        <div className='InputContainer'>
            <div className="input">
                <input type="text" placeholder='Add todo...' value={CurrentValue} onChange={(e) => {
                    setCurrentValue(e.target.value)
                    if (e.target.value === "") {
                        setDisabled(true)
                    } else {
                        setDisabled(false)
                    }
                }} />
                <div className="buttonContainer">
                    {toggleButton ? <button disabled={disabled} onClick={() => {
                        Addme()
                    }}><BsFillPlusCircleFill /></button> : <button onClick={() => {
                        Addme()
                    }}><GrUpdate /></button>}

                </div>
            </div>
        </div>
    )
}

export default InputComp