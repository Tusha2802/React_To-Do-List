import React, { useState } from "react";

function Inputarea(props) {
  const [item, setItem] = useState("");
  function Change(event) {
    const ivalue = event.target.value;
    setItem(ivalue);
  }
  return (
    <div>
      <input
        className="textBox"
        type="text"
        placeholder="Enter Item"
        onChange={Change}
        value={item}
      />
      <input
        className="buttonBox"
        type="button"
        value="Add"
        onClick={() => {
          props.cl(item);
          setItem("");
        }}
      />
    </div>
  );
}
export default Inputarea;
