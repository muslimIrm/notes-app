"use client";

const { useState, useEffect } = require("react");

const Model = ({ handleEdit, note, titel, setModel }) => {
    console.log(titel)
    const [noteData, setNoteData] = useState(note)

    const handleTitleInput = (event) => {
        setNoteData({ ...noteData, title: event })
    }
    const handleDesInput = (event) => {
        setNoteData({ ...noteData, des: event })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(noteData.titel, { ...noteData, dropDown: false });
        setModel();
    }

    return (
        <div className=" fixed top-0 left-0 w-dvw h-dvh bg-neutral-400/30 !z-[999]">
            <form onSubmit={(e) => handleSubmit(e)} className="lg:w-1/3 md:w-2/3 w-[90%] h-[45%] absolute top-1/2 left-1/2 -translate-1/2 bg-secdanry/30 backdrop-blur-2xl flex flex-col !gap-4 !px-5 items-center justify-center rounded-2xl">
                <h1 className="text-3xl text-white">Update Note</h1>
                <input placeholder="Titel" required value={noteData.title} onChange={(e) => handleTitleInput(e.target.value)} className="bg-background !px-5 !py-4 w-full rounded-2xl !text-white 
                 border-none outline-none"/>
                <input placeholder="description" value={noteData.des} onChange={(e) => handleDesInput(e.target.value)} className="bg-background !px-5 !py-4 w-full rounded-2xl !text-white 
                 border-none outline-none"/>
                <div className="flex !gap-4 items-center justify-center">

                    <button type={"submit"} className="text-xl text-white !px-4 !py-3 bg-background rounded-2xl cursor-pointer">Update</button>
                    <button type={"submit"} className="text-xl text-white !px-4 !py-3 border-2 border-background rounded-2xl cursor-pointer" onClick={()=> {setModel()}}>Close</button>

                </div>
            </form>
        </div>
    )
}

export default Model;