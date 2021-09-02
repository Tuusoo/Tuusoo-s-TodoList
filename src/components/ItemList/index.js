import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import Item from "../Item";
import { addTodo, removeTodo, selectTodoList } from "../../features/todoList/todoListSlice"
import { addDoing, removeDoing, selectDoingList } from "../../features/doingList/doingListSlice"
import { addDone, selectDoneList } from "../../features/doneList/doneListSlice"

import "../../style/itemList.less"

import plusGray from "../../images/plusGray.svg"
import plusblack from "../../images/plusBlack.svg"

function ItemList(props) {
  const todoList = useSelector(selectTodoList);
  const doingList = useSelector(selectDoingList);
  const doneList = useSelector(selectDoneList);
  const dispatch = useDispatch();
  const [isAddIconCover, setIsAddIconCover] = useState(false);
  let itemsArray = [];
  let itemsTemplate = <section></section>;

  const todoAdd = useRef("todoAdd")

  const iconMouseOver = () => setIsAddIconCover(true);
  const iconMouseOut = () => setIsAddIconCover(false);

  const addIntoList = () => {//添加至todo
    if(!todoAdd.current.value){return};
    let inputText = todoAdd.current.value;
    dispatch(addTodo(inputText));
    todoAdd.current.value = '';
  }

  const deleteFromTodo = (i) => {//从todo删除
    dispatch(removeTodo(i));
  }

  const addToDoing = (i, text) => {//从todo添加至doing
    dispatch(removeTodo(i));
    dispatch(addDoing(text));
  }

  const backToTodo = (i, text) => {//从doing回到todo
    dispatch(removeDoing(i));
    dispatch(addTodo(text));
  }

  const addToDone = (i, text) => {//从doing添加至done
    dispatch(removeDoing(i));
    dispatch(addDone(text));
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