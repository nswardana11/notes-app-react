import React from "react";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDeleteNote(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArchiveNote(id)}>{archived ? "Unarchive" : "Archive"}</button>
        </div>
    )
}

export default NoteItemAction;