import React, { useEffect, useState} from 'react';
import ListItem from './ListItem'
import FetchData from './FetchData';

function List() {
  const {
    data,
    loading,
  } = FetchData();

  return (
    <ul>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {data.map(item => (<ListItem key={item.id} name={item.name} complete={item.complete}  />))}
        </div>
      )}
    </ul>
  )
}

export default List