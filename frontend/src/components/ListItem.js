import React from 'react'

function ListItem({name, complete}) {
  return (
    <li>
        <label htmlFor="">
            <input type="checkbox" id="" />
            {name}
        </label>
        <button>Edit</button>
    </li>
  )
}

export default ListItem