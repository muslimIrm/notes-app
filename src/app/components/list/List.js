"use client"

import { useNotes } from "@/app/contexts/NotesContext";
import { AiFillDelete } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from "react";
import Model from "../model/Model";
import NoteModel from "../note/Note";
const List = ({notes}) => {
    const { removeNote, setNote } = useNotes();
    const [model, setModel] = useState(false);
    const [noteModel, setNoteModel] = useState(false);
    const [id, setId] = useState(null)

    const handleToggleDropDwon = (id, data) => {
        const d = { ...data }
        d.dropDown = !d.dropDown
        handleEdit(id, d)
    }

    

    const toggleModel = () => {
        setModel((p) => !p)
    }

    const toggleNoteModel = (id) => {

        setId(id)
        setNoteModel((p) => !p)
    }
    const handleDelete = (id) => {
        removeNote(id)
    }
    const handleEdit = (id, data) => {
        setNote(id, data)

    }

    
    return (
        <>
            <ul className="flex !gap-5 flex-wrap items-center justify-center">
                {
                    notes.length > 0 ?
                        notes.map((note, index) => {
                            return (
                                <div key={index}>
                                    <li onClick={(e) => { 
                                        toggleNoteModel(note.id);
                                     }}  className="min-w-[200px] relative max-w-[500px] shadow-2xl shadow-black/50 min-h-[150px] max-h-[400px] !text-black flex flex-col !gap-3 !px-4 !py-3 rounded-2xl "
                                        style={{ background: note.color }}>
                                        <h3 className="text-2xl">{note.title}</h3>
                                        <p className="text-[16px] ">{note.des}</p>
                                        <BsThreeDotsVertical onClick={(e) => 
                                            {handleToggleDropDwon(note.id, note)
                                            e.stopPropagation()}
                                            } className=" absolute top-2 right-3 text-xl" />
                                        {
                                            note.dropDown &&
                                            (<div  className=" absolute right-8 !px-2 !py-4 bg-secdanry/30 backdrop-blur-[30px] !gap-3 rounded-2xl flex-col flex">
                                                <span className="flex !gap-2 items-center justify-center text-[14px]" onClick={() => handleDelete(note.id)}>{<AiFillDelete className="!text-[18px]" />} Delete</span>
                                                <span className="flex !gap-2 items-center justify-center text-[14px]" onClick={toggleModel}>{<FaPen className="!text-[18px]" />} Edit</span>


                                            </div>)
                                        }

                                    </li>

                                    {
                                        model && note.dropDown &&
                                        (<Model note={note} setModel={toggleModel} handleEdit={handleEdit} titel={note.title} />
                                        )
                                    }

                                    {
                                        noteModel &&
                                        notes.map((n, index) => {
                                            if (n.id === id) {
                                                return <NoteModel key={index} note={n} setModel={toggleNoteModel} />
                                            }
                                        })}
                                </div>

                            )
                        }) 
                        : notes.notFound? <h1 className="text-xl text-neutral-200">Not Found!</h1> : 
                        <h1 className="text-xl text-neutral-200">There was no note!</h1>
                        
                }
            </ul>
        </>
    )
}

export default List;