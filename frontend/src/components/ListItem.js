import React from 'react'

function ListItem({name, complete, id}) {
  return (
    <li>
      {
        complete === "true"
        ? <label htmlFor={id} className="active"> 
            <input type="checkbox" id={id} defaultChecked={true} />
            {name}
          </label>
        : <label htmlFor={id}> 
            <input type="checkbox" id={id}  />
            {name}
          </label>
      }
        <button id={id}>Edit</button>
    </li>
  )
}

export default ListItem