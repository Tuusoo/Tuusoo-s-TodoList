import { useState } from "react"

import Item from "../Item";

import "../../style/itemList.less"

import plusGray from "../../images/plusGray.svg"
import plusblack from "../../images/plusBlack.svg"

function ItemList(props) {
  const[listArrays, setListArrays] = useState({
    todo: [],
    doing: [],
    done: []
  });
  const[isAddCover, setIsAddCover] = useState(false);
  const[isAddIconCover, setIsAddIconCover] = useState(false);
  const[inputText, setInputText] = useState("");
  
  let itemsArray = [];
  switch(props.tab) {
    case "todo":
      itemsArray = listArrays.todo;
      break;
    case "doing":
      itemsArray = listArrays.doing;
      break;
    case "done":
      itemsArray = listArrays.done;
      break;
    default:
      itemsArray = listArrays.todo;
      break;
  }
  let itemsTemplate = <section></section>;
  itemsTemplate = itemsArray.map((i, index) => <Item text={i} index={index} key={index}></Item>)

  const addMouseOver = () => setIsAddCover(true);
  const addMouseOut = () => setIsAddCover(false);

  const iconMouseOver = () => setIsAddIconCover(true);
  const iconMouseOut = () => setIsAddIconCover(false);

  const inputing = (e) => setInputText(e.target.value);

  const addIntoList = () => {
    setListArrays(() => {
      let setArray = listArrays;
      setArray.todo = [inputText,...setArray.todo];
      return setArray;
    });
  }
  return (
    <section>
      <section style={props.tab === "todo"?{}:{display: "none"}} className="addItem" onMouseOver={addMouseOver} onMouseOut={addMouseOut}>
        <input onInput={inputing}></input>
        <img src={isAddIconCover?plusblack:plusGray} style={isAddCover?{}:{display: "none"}} onMouseOver={iconMouseOver} onMouseOut={iconMouseOut} onMouseDown={addIntoList} alt="plus"/>
      </section>
      {itemsTemplate}
    </section>
  );
}

export default ItemList;