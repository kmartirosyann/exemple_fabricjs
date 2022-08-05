import { FC, useState } from 'react';
import Container from './components/container';
import NavBar from './components/navBar';
import Sidebar from './components/sidebar';
import './App.css';



const App: FC = () => {
  const [fontSize, setFontSize] = useState(0);
  const [posidion,setPosition] = useState('');
  
  const handelChooseText =(size:number)=>{
    setFontSize(size);
  };

  const handlePosition =(posXY:string)=>{
     setPosition(posXY);
  };

  return (
    <div className='App'>
      <NavBar  handlePosition={handlePosition} />
      <section className='content'>
        <Sidebar handelChooseText={handelChooseText}/>
        <Container size={fontSize} position={posidion}/>
      </section>
    </div>
  );
}

export default App;
