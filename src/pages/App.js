//import { useState } from 'react';
import Block from '../components/block';
import '../style/App.less'

function App() {
  let listType = ["todo", "doing", "done"];
  let listTitles = [];
  listTitles = listType.map((i) => 
    <Block type={i} key={i}></Block>
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
