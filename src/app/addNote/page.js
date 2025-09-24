"use client"
import { useState } from "react"
import { useNotes } from "../contexts/NotesContext"
const AddNote = () => {
    const [data, setData] = useState({ title: "", des: "" })
    const { addNote } = useNotes()
    const date = new Date()
    const colors = ["#DABBFA", "#D7F8F2", "#FFF5E1", "#F8D7D7"];
    const handleSubmit = (e) => {
        e.preventDefault()

        const random = Math.floor(Math.random() * colors.length)
        addNote({ ...data, id: Date.now(), color: colors[random], date: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` })
    }
    return (
        <div className="!w-dvw !py-8">
            <div className="container">
                <div className="content !gap-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl">Add Note</h1>

                    <form className="flex flex-col !gap-10 !w-full items-center justify-center" onSubmit={handleSubmit}>
                        <input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} placeholder="Title" type="text" className="w-full bg-secdanry !px-5 !py-4 rounded-2xl text-xl border-none outline-none hover:scale-103 transform transition-all duration-300" />
                        <textarea value={data.des} onChange={(e) => setData({ ...data, des: e.target.value })} placeholder="description" type="text" className="w-full bg-secdanry !px-5 !py-4 rounded-2xl text-xl border-none outline-none hover:scale-103 transform transition-all duration-300"></textarea>
                        <button type="submit" className="!px-4 !py-5 bg-secdanry rounded-2xl md:w-2/3 w-3/4 font-bold transform hover:translate-y-1 transition-all duration-300 cursor-pointer lg:w-1/2">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );

}


export default AddNote