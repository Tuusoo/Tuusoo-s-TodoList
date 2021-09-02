import { useSelector, useDispatch } from 'react-redux';

import ChangeList from '../components/ChangeList';
import ItemList from '../components/ItemList'
import { clickTodo, clickDoing, clickDone, selectTab } from '../features/tabType/tabSlice'

import '../style/App.less'

function App() {
  const listType = useSelector(selectTab);
  const dispatch = useDispatch();
  let tab = 'todo';
  let bodyColor = 'body';

  const changeList = (clickItem) => {//切换标签逻辑
    switch(clickItem){
      case 0: dispatch(clickTodo());break;
      case 1: dispatch(clickDoing());break;
      case 2: dispatch(clickDone());break;
      default: break;
    }
  }
  
  listType.forEach((i) => {
    if(i.state === true) {
      switch(i.title){
        case "todo": bodyColor = "body todoBody";tab="todo";break;
        case "doing": bodyColor = "body doingBody";tab="doing";break;
        case "done": bodyColor = "body doneBody";tab="done";break;
        default: bodyColor = "body";tab="todo";break;
      }
    }
  })

  const preventClientRightClick = (e) => e.preventDefault();

  return (
    <section className={bodyColor} onContextMenu={preventClientRightClick}>
      <section className="chooseList">
        <ChangeList changeList={changeList} listType={listType}></ChangeList>
      </section>
      <section className="itemList">
        <ItemList tab={tab}></ItemList>
      </section>
    </section>
  )
}

export default App;
