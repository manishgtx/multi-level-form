import {useState} from 'react';
import Steps from './components/Steps';
import FormContainer from './components/FormContainer';
function App() {
  const [index,setIndex] = useState(1);
  return (
    <div className="App">
      <Steps index={index}/>
      <FormContainer index={index} setIndex={setIndex}/>
    </div>
  );
}

export default App;
