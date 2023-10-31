import { useEffect, useState} from 'react';
import axios from 'axios';



const useFetchData = () => {
  const [search ,setsearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refetch,setrefetch] = useState(0);
  const fetchData = async () => {
    try {
      if(search === "") return;
      const { data: response } = await axios.get('http://localhost:8000/myntra/' + search + '/');
      setData(response);
    } catch (error) {
      console.error(error)
    }
    setLoading(false);
  };

  const reFetch = (sea) => {
    setLoading(true);
    setsearch(sea);
    return setrefetch(refetch+1);
  }

  useEffect(() => {
    fetchData();
  }, [refetch]);

  return {
    setsearch,
    data,
    loading,
    reFetch
  };
};

export default useFetchData;
