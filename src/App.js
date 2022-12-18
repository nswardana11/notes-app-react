import { useState, useEffect } from "react";
import { getInitialData } from "./utils/index";

import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

function App() {
    const [query, setQuery] = useState("");
    const [findNotes, setfindNotes] = useState([]);
    const [notes, setNotes] = useState(getInitialData());

    const activeNotes = (findNotes || notes).filter((note) => !note.archived);
    const archiveNotes = (findNotes || notes).filter((note) => note.archived);

    useEffect(() => {
        setfindNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
    }, [query, notes]);

    return (
        <div className="note-app" >
            <NoteHeader search={query} setQuery={setQuery} />
            <NoteBody activeNotes={activeNotes} archiveNotes={archiveNotes} setNotes={setNotes} />
        </div>
    );

}

export default App;
