
import Appname from './components/Appname';
import Apptodo from './components/Apptodo';
import Todoitem from './components/Todoitem';
import Todoitems from './components/Todoitems';
import './App.css';
function App(){    const todoItems = [
    { name: "got clg", dueDate: "4/10/2020" },
    { name: "buy milk", dueDate: "3/3/2020" },
    { name: "blahblahblah", dueDate: "now"}
  ];
  return  <center className='todo-container'>

    <Appname>
    </Appname>
    <Apptodo></Apptodo>
    
  <Todoitems todoItems={todoItems}></Todoitems>

 
 
    </center>
}
export default App;