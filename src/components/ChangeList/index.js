import Block from '../Block';

function ChangeList(props) {
  let listTitles = props.listType.map((i,index) => 
    <Block type={i.title} isClick={i.state} index={index} changeList={props.changeList} key={i.title}></Block>
  )
  return(
    <section>
      {listTitles}
    </section>
  )
}

export default ChangeList;