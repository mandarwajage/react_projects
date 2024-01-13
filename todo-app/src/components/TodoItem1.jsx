function TodoItem1() {
  let todoName = "By Milk";
  let todoDate = "8/01/2024";

  return (
    <div className="container">
      <div className="row kg-row" >
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="kg-button btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
