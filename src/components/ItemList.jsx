import React, { useState } from "react";
import "../styles.css";

function Itemlist(props) {
  const [isDone, setIsDone] = useState(false);

  function lineThrough() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  if (props.v === "") {
    return null;
  } else {
    return (
      <div onClick={lineThrough}>
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.v}
        </li>
      </div>
    );
  }
}
export default Itemlist;
