import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
//import ItemList from "./ItemList";
import ItemListDeletion from "./ItemList_deletion";
import "../styles.css";

function App() {
  //const [allItems, setAllItems] = useState([]);
  var [listItems, setListItems] = useState([]);

  function Clicked(inputText) {
    setListItems((listItems) => [...listItems, inputText]);
  }

  function deleteItem(id) {
    //console.log(id);
    setListItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const list = listItems.toString().split(",");
  console.log(list);
  return (
    <div className="container">
      <Heading />
      <InputArea cl={Clicked} />
      {/* <div className="listBox">
        <ul className="listItem">
          {list.map((i) => {
            return <ItemList key="" v={i} />;
          })}
        </ul>
      </div> */}
      <div className="listBox">
        <ul className="listItem">
          {list.map((i, index) => {
            return (
              <ItemListDeletion
                key={index}
                id={index}
                v={i}
                Checked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
