
import Appname from './components/Appname';
import Apptodo from './components/Apptodo';
import Todoitem1 from './components/Todoitem1';
import Todoitem2 from './components/Todoitem2';
import './App.css';
function App(){
  return  <center className='todo-container'>
    <Appname>
    </Appname>
    <Apptodo></Apptodo>
    
  

 
  <div className="items-container"><Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2></div>  
    </center>
}
export default App;