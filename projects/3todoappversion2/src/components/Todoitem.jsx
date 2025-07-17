function Todoitem({todoDate,todoName}){
  return (<div class="container">
  
  <div className="row kg-row">
    <div className="col-6">{todoDate}</div>
    <div className="col-4">{todoName}</div>
    <div className="col-2"><button type="button" class="btn btn-danger kg-button">delete</button></div>
  </div>
  </div> ); 
}
export default Todoitem;