"use client";
import { useState } from 'react';
import { BiSolidSearchAlt2 } from 'react-icons/bi';

const Search = ({ notes, setData }) => {
    const [valueSearch, setValueSearch] = useState("")

    const handleSearch = (value) => {
        const fillter = []
        for (var i = 0; i <= notes.length; i++) {

            for (let key in notes[i]) {
                const note = notes[i][key];
                if (typeof note === "string" && note.includes(value)) {
                    const f = fillter.some((f) => f.id === notes[i]["id"])
                    if (!f) {
                        fillter.push(notes[i])
                    }
                }
            }
        }
        if (fillter.length === 0) {
            setData({ notFound: true })
        } else {
            setData(fillter)

        }
    }

    const fillterFunc = (value, fillterValue) => {
        const v = value;
        return v.includes(fillterValue)
    }
    return (
        <div className='flex !gap-3 items-center justify-center w-full'>
            <input onChange={(e) => handleSearch(e.target.value)} placeholder="search" type="text" className="w-full bg-secdanry !px-5 !py-4 rounded-2xl text-xl border-none outline-none hover:scale-103 transform transition-all duration-300" />
        </div>
    );

}


export default Search;
