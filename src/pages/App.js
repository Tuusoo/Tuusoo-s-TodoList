import { useState } from 'react';
import ChangeList from '../components/ChangeList';
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
  let bodyColor = 'body';
  listType.forEach((i,index) => {
    if(i.state === true) {
      switch(i.title){
        case "todo": bodyColor = "body todoBody";break;
        case "doing": bodyColor = "body doingBody";break;
        case "done": bodyColor = "body doneBody";break;
        default: bodyColor = "body";break;
      }
    }
  })

  return (
    <section className={bodyColor}>
      <section className="chooseList">
        <ChangeList changeList={changeList} listType={listType}></ChangeList>
      </section>
      <section className="itemList"></section>
    </section>
  )
}

export default App;
