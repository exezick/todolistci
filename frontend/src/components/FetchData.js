import { useEffect, useState} from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('https://localhost/todolistci/backend/');
        setData(response);
        console.log(response);
      } catch (error) {
        console.error(error);
        console.log(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default FetchData;