import axios from 'axios';
import { useEffect, useState } from 'react';

interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const useFetch = (url: string): UserInfo => {
  const [data, setData] = useState<UserInfo>({
    id: 0,
    username: '',
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.error('Error fetching data: ', err);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export { useFetch };
export type { UserInfo };
