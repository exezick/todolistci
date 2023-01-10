import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do List with CodeIgniter</h1>

      <form autoComplete="off">
        <input type="text" name="todos" id="todos"
        required placeholder="Enter To Do" />
        <button type="submit">+</button>
      </form>
      
      <hr />

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            play dota 
          </label>
          <button>Edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          All
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
      </div>

    </div>
  );
}

export default App;
