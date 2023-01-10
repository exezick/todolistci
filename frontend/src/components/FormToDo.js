import React from 'react'

function FormToDo() {
  return (
    <div>
        <form autoComplete="off">
            <input type="text" name="todos" id="todos" required placeholder="Enter To Do" />
            <button type="submit">+</button>
        </form>
    </div>
  )
}

export default FormToDo