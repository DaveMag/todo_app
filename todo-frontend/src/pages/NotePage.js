// import { redirect } from "next/dist/server/api-utils";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const NotePage = () => {
  let { id } = useParams();

  let [note, setNote] = useState("");

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    if (id === "new") return;
    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let handleSubmit = () => {
    console.log("Note:", note);
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
  };

  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
          <h3 onClick={handleSubmit}>&#10094;</h3>
        </Link>
        {id !== "new" ? (
          <Link to="/">
            <button className="delIcon" onClick={deleteNote}>
              &#128465;
            </button>
            {/* <button onClick={deleteNote}>&#xe020;</button> */}
          </Link>
        ) : (
          <Link to="/">
            <button className="saveIcon" onClick={handleSubmit}>
              &#10004;
            </button>
          </Link>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
