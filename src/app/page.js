"use client"
import { useState } from "react";
import List from "./components/list/List";
import Search from "./components/search/Search";
import { useNotes } from "./contexts/NotesContext";
export default function Home() {
  const {notes} = useNotes() 
  const [dataNotes, setDataNotes] = useState([])
  const setNotes = (value)=>{
    setDataNotes(value)
    console.log(value)
  }
  return (
    
    <>
      <div className="max-w-dvw !py-8 !overflow-hidden">
          <div className="container !gap-20">
            <div className="content">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">Notes</h1>
            </div>
            <div className="content !flex flex-col !gap-7 !items-center !justify-center">
              <Search notes={notes} setData={setNotes}/>
              <List notes={dataNotes.length > 0 || dataNotes.notFound ? dataNotes : notes}/>
            </div>

            
          </div>
          
      </div>
    </>
  );
}
