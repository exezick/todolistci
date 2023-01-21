import React from 'react'
import FetchData from './FetchData';

function Footer() {
  const {
    data,
  } = FetchData();

  return (
    <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          All
        </label>
        <p>You have {data?.length} to do</p>
        <button id="delete">Delete</button>
    </div>
  )
}

export default Footer