function TodoItem1() {

  let todoName = 'By Milk';
  let todoDate = '8/01/2024';
  
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
