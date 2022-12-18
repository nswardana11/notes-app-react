import { useState } from "react";
import Input from "./Input";

function NoteInput({ setNotes }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        const timestamp = new Date().toISOString();

        setNotes((notes) => [
            ...notes,
            { id: timestamp, title: title, body: body, archived: false, createdAt: timestamp },
        ]);
    };


    return (
        <div className="note-input">
            <h2>Create a note</h2>
            <form onSubmit={onSubmitEventHandler}>
                <p className="note-input__title__char-limit">Remaining characters: <span className="note-input__title__char-value">{50 - title.length}</span>
                </p> 
                
                <Input
                    value={title}
                    onChange={setTitle}
                    id='title'
                    name='title'
                    type="text"
                    placeholder="Title"
                    required
                />
                <Input
                    value={body}
                    onChange={setBody}
                    id="body"
                    name="body"
                    type='textarea'
                    placeholder="Write your note"
                    required
                />
                <button type="Create">Create</button>
            </form>
        </div>
    );
}

export default NoteInput;