import Block from '../Block';

function ChangeList(props) {
  const {changeList} = props;
  let listTitles = props.listType.map((i,index) => 
    <Block type={i.title} isClick={i.state} index={index} changeList={changeList} key={i.title}></Block>
  )
  return(
    <>
      {listTitles}
    </>
  )
}

export default ChangeList;