import Todoitem from './Todoitem';
const TodoItems=({todoItems})=>{
  return (
     <div className="items-container">
      {todoItems.map((items)=>(<Todoitem todoDate = {items.dueDate} todoName={items.name}></Todoitem>))}
    
   </div>  

  );
};
export default TodoItems;