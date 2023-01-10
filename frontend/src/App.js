import React from 'react';
import FormToDo from './components/FormToDo';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do List with CodeIgniter</h1>
      <FormToDo />
      <hr />
      <List />
      <Footer />
    </div>
  );
}

export default App;
