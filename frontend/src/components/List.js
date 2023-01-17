import React, {useEffect} from 'react';
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
        <>
          {data.map(item => (<ListItem key={item.id} id={item.id} name={item.name} complete={item.complete} />))}
        </>
      )}
    </ul>
  )
}

export default List