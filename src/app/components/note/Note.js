"use client";

const { useState, useEffect } = require("react");

const NoteModel = ({ handleEdit, note, titel, setModel }) => {
    const [noteData, setNoteData] = useState(note)

    const handler = (e) => {
        setModel(note.id);

    }
    return (
        <div onClick={handler} className=" fixed top-0 left-0 w-dvw h-dvh bg-neutral-400/30 !z-[999]">
            <div onClick={(e)=> e.stopPropagation()} className="lg:w-1/3 md:w-2/3 w-[90%] h-[45%] absolute top-1/2 left-1/2 -translate-1/2 backdrop-blur-2xl flex flex-col !gap-4 !px-5 !py-6 rounded-2xl"
                style={{ background: note.color }}>
                <h1 className="text-4xl text-black">{note.title}</h1>
                <span className="text-sm text-neutral-500">{note.date}</span>
                <hr></hr>
                <p className="text-lg leading-[1.5] text-black">{note.des}</p>
            </div>
        </div>
    )
}

export default NoteModel;