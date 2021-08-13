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
  // let bodyColor = "body todoBody";
  const changeList = (clickItem) => {//切换标签逻辑
    setListType(() => {
      let changed = [];
      listType.forEach((i,index) => {
        let item = i;
        if(clickItem === index){
          item.state = true;
          // switch(index) {
          //   case 0 : bodyColor = "body todoBody";break;
          //   case 1 : bodyColor = "body doingBody";break;
          //   case 2 : bodyColor = "body doneBody";break;
          //   default : bodyColor = "body";break;
          // }
          // console.log(bodyColor)
        }else{
          item.state = false;
        }
        changed.push(item);
      })
      return changed;
    })
  }
  const bodyColor = () => {
    listType.forEach((i,index) => {
      if(i.state === true) {
        switch(i.title){
          case "todo": return ("body todoBody");
          case "doing": return ("body doingBody");
          case "done": return ("body doneBody");
          default: return ("body");
        }
      }
    })
  }

  return (
    <section className="body">
      <section className="chooseList">
        <ChangeList changeList={changeList} listType={listType}></ChangeList>
      </section>
      <section className="itemList"></section>
    </section>
  )
}

export default App;
