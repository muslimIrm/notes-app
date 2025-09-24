"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);


export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(()=>{
        try {
            const notes = localStorage.getItem("notes")
            return notes? JSON.parse(notes) : []
        } catch (error) {
            console.error("Error Getting Notes from localStorage", error);
            return []
            
        }
    })
    const addNote = (note) => {
        setNotes((p) => {
            let newData = [...p, note]
            console.log(p)
            localStorage.setItem("notes", JSON.stringify(newData))
            return newData
        })
    }

    const setNote = (id, data) => {
        console.log(id)
        setNotes((p) => 
            p.map((n) => {
                if (n.id === data.id) {
                    let updateNote = {...n, ...data}
                    console.log("update ")
                    localStorage.setItem("notes", JSON.stringify(p.map(n => n.id === data.id ? {...updateNote, dropDown: false} : {...n, dropDown: false})))
                    return updateNote
                }
                return n
            }
            )
        )
    }

    const removeNote = (id) => {
        setNotes((p) => {
            let newNotes = p.filter(n => n.id !== id)
            localStorage.setItem("notes", JSON.stringify(newNotes))
            return newNotes
        })
    }



    return (
        <NotesContext.Provider value={{ addNote, setNote, removeNote, notes }}>
            {children}
        </NotesContext.Provider>
    )
} 
