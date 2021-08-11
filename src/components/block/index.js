import '../../style/block.less'
import vueimg from '../../images/vueLogo.svg'
import reactimg from '../../images/reactLogo.svg'

function block(props) {
  switch(props.type){
    case true:
      return(
        <section>
          <img src={ vueimg } className="logo" alt="vue"/>
        </section>
      );
    case false:
      return(
        <section>
          <img src={ reactimg } className="logo" alt="react"/>
        </section>
      )
    default:
      return(
        <section>行</section>
      )
  }
}

export default block;