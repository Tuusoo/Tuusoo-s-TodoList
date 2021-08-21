import { useState } from 'react';
import ChangeList from '../components/ChangeList';
import ItemList from '../components/ItemList'
import '../style/App.less'

function App() {
  const [listType, setListType] = useState([//切换待办，正在，已办三种状态
    {
      title: "todo",//title：标签名称
      state: true,//state：是否在点击状态
    },{
      title: "doing",
      state: false,
    },{
      title: "done",
      state: false,
    }
  ]);
  let tab = 'todo';
  let bodyColor = 'body';

  const changeList = (clickItem) => {//切换标签逻辑
    setListType(() => {
      let changed = [];
      listType.forEach((i,index) => {
        let item = i;
        if(clickItem === index){
          item.state = true;
        }else{
          item.state = false;
        }
        changed.push(item);
      })
      return changed;
    })
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
