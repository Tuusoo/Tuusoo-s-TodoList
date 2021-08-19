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

  const deleteItem = () => {props.deleteFromTodo(props.index)}

  const closeRightClickMenu = () => setPopMenu(false);//关闭右键点击菜单

  const rightClickEvent = (e) => {
    e.preventDefault();
    let locX = e.clientX,locY = e.clientY;
    setPopMenu(
      <RightClickMenu closeRightClickMenu={closeRightClickMenu} locX={locX} locY={locY} deleteItem={deleteItem}></RightClickMenu>
    );
  }

  return (
    <>
      <section className="item" onMouseOver={mouseOver} onMouseOut={mouseOut} onContextMenu={rightClickEvent}>
        <img src={unselected} alt="check"/>
        <section className="text">{props.text}</section>
        <img src={isTrashCover?trashSelected:trash} alt="delete" style={isCover?{}:{display: "none"}} onMouseOver={trashMouseOver} onMouseOut={trashMouseOut} onClick={deleteItem}/>
      </section>
      {popMenu}
    </>
  )
}

export default Item;