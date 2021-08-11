import { useState } from 'react';
import Block from '../components/block';

function App() {
  const [num, setNum] = useState(true);
  const changeType = () => {
    if(num){
      setNum(false);
    }else{
      setNum(true);
    }
  }
  return (
    <section>
      <Block type={num}></Block>
      <button onClick={changeType}>change</button>
    </section>
  )
}

export default App;
