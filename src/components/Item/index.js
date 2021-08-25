import { useState } from "react"

import RightClickMenu from "../RightClickMenu"

import "../../style/item.less"

import trash from "../../images/trash.svg"
import trashSelected from "../../images/trashSelected.svg"
import unselected from "../../images/unselected.svg"

function Item(props) {
  const [isCover, setIsCover] = useState(false);
  const [isTrashCover, setIsTrashCover] = useState(false);
  const [popMenu, setPopMenu] = useState(<></>);

  const mouseOver = () => setIsCover(true);
  const mouseOut = () => setIsCover(false);
  const trashMouseOver = () => setIsTrashCover(true);
  const trashMouseOut = () => setIsTrashCover(false);

  const deleteItem = () => props.deleteFromTodo(props.index);//从todo删除

  const addToDoing = () => props.addToDoing(props.index,props.text);//从todo添加至doing

  const backToTodo = () => props.backToTodo(props.index,props.text);//从doing回到todo

  const addToDone = () => props.addToDone(props.index,props.text);//从doing添加至done

  const closeRightClickMenu = () => setPopMenu(false);//关闭右键点击菜单

  const rightClickEvent = (e) => {
    let locX = e.clientX,locY = e.clientY;
    setPopMenu(
      <RightClickMenu
      tab={props.tab}
      closeRightClickMenu={closeRightClickMenu}
      locX={locX}
      locY={locY}
      deleteItem={deleteItem}
      addToDoing={addToDoing}
      backToTodo={backToTodo}
      addToDone={addToDone}>
      </RightClickMenu>
    );
  }

  return (
    <>
      <section
      className="item"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onContextMenu={props.tab === "todo" || props.tab === "doing"//只在待办和已办增加右击事件
      ? rightClickEvent
      : () => {}}>
        <img src={unselected} alt="check"/>
        <section className="text">{props.text}</section>
        <img src={isTrashCover?trashSelected:trash} alt="delete" style={isCover?{}:{display: "none"}} onMouseOver={trashMouseOver} onMouseOut={trashMouseOut} onClick={deleteItem}/>
      </section>
      {popMenu}
    </>
  )
}

export default Item;