import React, {useEffect} from 'react';
import ListItem from './ListItem'
import FetchData from './FetchData';

function List() {
  const {
    data,
    loading
  } = FetchData();

  useEffect(() => {
    console.log(data, loading.current, 'fran')
  }, [data, loading.current])

  return (
    <ul>
      {loading && <div>Loading</div>}
      {console.log(data, loading)}
      {!loading.current && (
        <>
          {data.map(item => (<ListItem key={item.id} id={item.id} name={item.name} complete={item.complete} />))}
        </>
      )}
      {/* {data.length > 0 ? 
        <>
          {data.map(item => (<ListItem key={item.id} id={item.id} name={item.name} complete={item.complete} />))}
        </> :
        <div>Loading</div>
      } */}
    </ul>
  )
}

export default List