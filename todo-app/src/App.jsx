import AppName from "./components/AppName";

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo here"></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">By Milk</div>
          <div class="col-4">8/01/2024</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            Karu 420
          </div>
          <div class="col-4">
            1/01/2024
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
