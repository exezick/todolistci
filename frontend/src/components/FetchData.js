import { useEffect, useMemo, useRef, useState} from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState({});
  const loading = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      let dat = [];
      try {
        const { data: response } = await axios.get(
          "http://localhost/todolistci/backend/index.php/todos/view",
          { crossDomain: true }
        );
        response.map((x) => {
          return dat.push(x)
        })
      } catch (error) {
        console.error(error);
      }
      setData(dat);
    };

    if(loading.current){
      fetchData();
      loading.current = false;
    }
    
  },[data, loading.current]);

  // console.log(data, loading.current, 'francis')
  return {
    data,
    loading,
  };
};

export default FetchData;