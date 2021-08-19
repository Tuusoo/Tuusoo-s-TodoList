import { useRef, useState } from "react"

import Item from "../Item";

import "../../style/itemList.less"

import plusGray from "../../images/plusGray.svg"
import plusblack from "../../images/plusBlack.svg"

function ItemList(props) {
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [isAddIconCover, setIsAddIconCover] = useState(false);

  const todoAdd = useRef("todoAdd")

  const iconMouseOver = () => setIsAddIconCover(true);
  const iconMouseOut = () => setIsAddIconCover(false);

  const addIntoList = () => {
    if(!todoAdd.current.value){return};
    let inputText = todoAdd.current.value;
    setTodoList(() => {
      let setArray = todoList;
      setArray = [inputText,...todoList];
      return setArray;
    });
    todoAdd.current.value = '';
  }

  const deleteFromTodo = (i) => {
    setTodoList(() => {
      let setArray = todoList;
      setArray = setArray.filter((item,index) => index !== i);
      return setArray;
    });
  }
  
  let itemsArray = [];
  switch(props.tab) {//渲染哪个list
    case "todo":
      itemsArray = todoList;
      break;
    case "doing":
      itemsArray = doingList;
      break;
    case "done":
      itemsArray = doneList;
      break;
    default:
      itemsArray = todoList;
      break;
  }
  let itemsTemplate = <section></section>;
  itemsTemplate = itemsArray.map((i, index) => <Item text={i} index={index} key={index} deleteFromTodo={deleteFromTodo}></Item>)//渲染list
  
  return (
    <>
      <section style={props.tab === "todo"?{}:{display: "none"}} className="addItem">
        <img src={isAddIconCover?plusblack:plusGray} onMouseOver={iconMouseOver} onMouseOut={iconMouseOut} onClick={addIntoList} alt="plus"/>
        <input ref={todoAdd}></input>
      </section>
      {itemsTemplate}
    </>
  );
}

export default ItemList;