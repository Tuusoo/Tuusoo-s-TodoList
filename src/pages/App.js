import { useState } from 'react';
import Block from '../components/block';
import '../style/App.less'

function App() {
  /* let listType = ["todo", "doing", "done"];
  let listTitles = [];
  listTitles = listType.map((i) => 
    <Block type={i} key={i}></Block>
  ) */
  const [listType, setListType] = useState([
    {
      title: "todo",
      state: true,
    },{
      title: "doing",
      state: false,
    },{
      title: "done",
      state: false,
    }
  ]);
  let listTitles = [];
  listTitles = listType.map((i) => 
    <Block type={i.title} isClick={i.state} key={i.title}></Block>
  )
  return (
    <section className="body">
      <section className="chooseList">
        {listTitles}
      </section>
    </section>
  )
}

export default App;
