import React, { useState } from "react";
import "../styles.css";

function Itemlist_Deletion(props) {
  if (props.v === "") {
    return null;
  } else {
    return (
      <div
        onClick={() => {
          return props.Checked(props.id);
        }}
      >
        <li>{props.v}</li>
      </div>
    );
  }
}
export default Itemlist_Deletion;
