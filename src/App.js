import './App.css';
import ComponentForRender from './components/ComponentForRender.js';


function App() {
  return <div className='main'>
    <ComponentForRender opt={'data'} />
    <ComponentForRender opt={'error'} />
    <ComponentForRender opt={'loading'} />
  </div>
}

export default App;
