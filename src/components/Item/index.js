import { useState } from "react"

import "../../style/item.less"

import trash from "../../images/trash.svg"
import trashSelected from "../../images/trashSelected.svg"
import unselected from "../../images/unselected.svg"

function Item(props) {
  const [isCover, setIsCover] = useState(false);
  const [isTrashCover, setIsTrashCover] = useState(false);
  const mouseOver = () => setIsCover(true);
  const mouseOut = () => setIsCover(false);
  const trashMouseOver = () => setIsTrashCover(true);
  const trashMouseOut = () => setIsTrashCover(false);
  const deleteItem = () => {props.deleteFromTodo(props.index)}

  return (
    <section className="item" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <img src={unselected} alt="check"/>
      <section className="text">{props.text}</section>
      <img src={isTrashCover?trashSelected:trash} alt="delete" style={isCover?{}:{display: "none"}} onMouseOver={trashMouseOver} onMouseOut={trashMouseOut} onClick={deleteItem}/>
    </section>
  )
}

export default Item;