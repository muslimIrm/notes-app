"use client";

const { useState, useEffect } = require("react");

const NoteModel = ({ handleEdit, note, titel, setModel }) => {
    const [noteData, setNoteData] = useState(note)

    return (
        <div onClick={()=> {setModel}} className=" fixed top-0 left-0 w-dvw h-dvh bg-neutral-400/30 !z-[999]">
            <div className="lg:w-1/3 md:w-2/3 w-[90%] h-[45%] absolute top-1/2 left-1/2 -translate-1/2 backdrop-blur-2xl flex flex-col !gap-4 !px-5 !py-6 rounded-2xl"
             style={{background: note.color}}>
                <h1 className="text-4xl">{note.title}</h1>
                <span className="text-sm text-neutral-500">{note.date}</span>
                <hr></hr>
                <p className="text-lg leading-[1.5]">{note.des}</p>
            </div>
        </div>
    )
}

export default NoteModel;