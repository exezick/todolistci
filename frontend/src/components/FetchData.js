import { useEffect, useState} from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost/todolistci/backend/index.php/todos/view",
        { crossDomain: true }
      );
      setData(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const mutate = () => fetchData();

  useEffect(() => {
    fetchData()
  }, [data]);

  return {
    data,
    loading,
    mutate,
  };
};

export default FetchData;