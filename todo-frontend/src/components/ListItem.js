import React from "react";
import { Link } from "react-router-dom";

let getTime = (note) => {
  let d = new Date(note.updated);
  let mins = ("0" + d.getMinutes()).slice(-2);
  let time = d.getHours() + ":" + mins + ":" + d.getSeconds();
  let date = d.toLocaleDateString();
  return date + " at " + time;
};

let getTitle = (note) => {
  let title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.slice(0, 45);
  }
  return title;
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 40) {
    return content.slice(0, 15) + "....";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`}>
      <div className="notes-list-item">
        <h2>{getTitle(note)}</h2>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
