import '../../style/block.less'
import vueimg from '../../images/vueLogo.svg'
import reactimg from '../../images/reactLogo.svg'
import angularimg from '../../images/angularLogo.svg'

function block(props) {
  switch(props.type){
    case "todo":
      return(
        <section className="chooseLabel">
          <img src={ vueimg } className="logo" alt="vue"/>
          <section className="text">待办事项</section>
        </section>
      );
    case "doing":
      return(
        <section className="chooseLabel">
          <img src={ reactimg } className="logo" alt="react"/>
          <section className="text">正在处理</section>
        </section>
      )
    case "done":
      return(
        <section className="chooseLabel">
          <img src={ angularimg } className="logo" alt="react"/>
          <section className="text">已办事项</section>
        </section>
      )
    default:
      return(
        <section className="chooseLabel">
          <img src={ angularimg } className="logo" alt="react"/>
          <section className="text"></section>
        </section>
      )
  }
}

export default block;