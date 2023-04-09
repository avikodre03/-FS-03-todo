import './ListToShow.css';
import { mainContext } from '../Context';
import { useContext, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const ListToShowComp = () => {
   
    const {
        CurrentValue, setCurrentValue,
        currentList, setcurrentList,
        toggleButton, settoggleButton,
        isEditing, setIsEditing
    } = useContext(mainContext)

    const deleteFunc = (id) => {
        const newList = currentList.filter((ele) => {
            return ele.id !== id
        })
        console.log(newList);
        setcurrentList(newList)
    }
   

    const editFunc = (id) => {
        const edit = currentList.find((ele) => {
            return ele.id === id
        })
        setCurrentValue(edit.CurrentValue)
        setIsEditing(id)

    }

    return (
        <>
           <div className='listToShowContainer'>
            {currentList.map((ele) => {
                return (
                        <div className="list">
                            <div className="checkbox">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="items">
                                <p >{ele.CurrentValue}</p>
                            </div>
                            <div className="btns">
                                <button  style={{ color: "orange" }}onClick={() => {
                                    editFunc(ele.id)
                                    settoggleButton(false)
                                }}><AiFillEdit/></button>

                                <button  style={{ color: "grey" }} onClick={() => {
                                        deleteFunc(ele.id)
                                    }}><RiDeleteBin5Fill/></button>
                            </div>
                        </div>
                   
                );
            })}
             </div>
        </>
    )
}

export default ListToShowComp