import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ activeNotes, archiveNotes, setNotes }) {
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <NoteList tag="Active Notes" setNotes={setNotes} notes={activeNotes} />
            <NoteList tag="Archived Notes" setNotes={setNotes} notes={archiveNotes} />
        </div>
    );
}

export default NoteBody;