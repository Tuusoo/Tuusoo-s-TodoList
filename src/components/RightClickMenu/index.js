import "../../style/rightclickmenu.less"

function rightClickMenu(props) {
  let locationXY = {
    left: props.locX,
    top: props.locY
  }

  const mouseOver = (e) => {
    e.target.style.background = "#F5F6F7";
  }
  const mouseOut = (e) => {
    e.target.style.background = "#FFFFFF";
  }
  return(
    <section className="backGround" onClick={props.closeRightClickMenu} onContextMenu={props.closeRightClickMenu}>
      <section className="menu" style={locationXY}>
        {props.tab === "todo"
        ? <>
            <section onClick={props.addToDoing} onMouseOver={mouseOver} onMouseOut={mouseOut}>移动到“正在处理”</section>
            <section onClick={props.deleteItem} onMouseOver={mouseOver} onMouseOut={mouseOut}>删除</section>
          </>
        : <>
            <section onClick={props.backToTodo} onMouseOver={mouseOver} onMouseOut={mouseOut}>移动到“待办事项”</section>
            <section onClick={props.addToDone} onMouseOver={mouseOver} onMouseOut={mouseOut}>移动到“已办事项”</section>
          </>}
      </section>
    </section>
  )
}

export default rightClickMenu;