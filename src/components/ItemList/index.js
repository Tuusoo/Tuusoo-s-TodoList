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
  let itemsArray = [];
  let itemsTemplate = <section></section>;

  const todoAdd = useRef("todoAdd")

  const iconMouseOver = () => setIsAddIconCover(true);
  const iconMouseOut = () => setIsAddIconCover(false);

  const addIntoList = () => {//添加至todo
    if(!todoAdd.current.value){return};
    let inputText = todoAdd.current.value;
    setTodoList(() => {
      let setArray = todoList;
      setArray = [inputText,...todoList];
      return setArray;
    });
    todoAdd.current.value = '';
  }

  const deleteFromTodo = (i) => {//从todo删除
    setTodoList(() => {
      let setArray = todoList;
      setArray = setArray.filter((item,index) => index !== i);
      return setArray;
    });
  }

  const addToDoing = (i, text) => {//从todo添加至doing
    deleteFromTodo(i);
    setDoingList(() => {
      let setArray = doingList;
      setArray = [text,...doingList];
      return setArray;
    });
  }

  const backToTodo = (i, text) => {//从doing回到todo
    setDoingList(() => {
      let setArray = doingList;
      setArray = setArray.filter((item,index) => index !== i);
      return setArray;
    });
    setTodoList(() => {
      let setArray = todoList;
      setArray = [text,...todoList];
      return setArray;
    });
  }

  const addToDone = (i, text) => {//从doing添加至done
    setDoingList(() => {
      let setArray = doingList;
      setArray = setArray.filter((item,index) => index !== i);
      return setArray;
    });
    setDoneList(() => {
      let setArray = doneList;
      setArray = [text,...doneList];
      return setArray;
    });
  }
  
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

  itemsTemplate = itemsArray.map(//渲染list
    (i, index) =>
    <Item
    tab={props.tab}
    text={i}
    index={index}
    key={index}
    deleteFromTodo={deleteFromTodo}
    addToDoing={addToDoing}
    backToTodo={backToTodo}
    addToDone={addToDone}>
    </Item>
  )
  
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