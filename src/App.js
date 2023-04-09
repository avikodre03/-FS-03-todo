
import './App.css';
import InputComp from './Components/Input/InputComp';
import ListToShowComp from './Components/ListToShow/ListToShowComp';

function App() {
  return (
    <>
    
    <div className="App">
      <div className='OuterContainer'>

    <div className='heading'>
      <h1>todos</h1>
    </div>
    <div className='mainContain'>
      <InputComp/>
      <ListToShowComp/>
    </div>
      </div>
    </div>
    </>
  );
}

export default App;
