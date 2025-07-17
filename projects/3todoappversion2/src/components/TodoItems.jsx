import Todoitem from './Todoitem';
import styles from "./TodoItems.module.css"
const TodoItems=({todoItems})=>{
  return (
     <div className= {styles.itemscontainer}>
      {todoItems.map((items)=>(<Todoitem todoDate = {items.dueDate} todoName={items.name}></Todoitem>))}
    
   </div>  

  );
};
export default TodoItems; 