import React from 'react'

function ListItem({name, complete, id}) {
  return (
    <li>
        <label htmlFor={id}>
            <input type="checkbox" id={id} />
            {name}
        </label>
        <button>Edit</button>
    </li>
  )
}

export default ListItem