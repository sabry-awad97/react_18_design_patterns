import { ReactNode, useEffect, useState } from 'react';

interface FetchProps<T> {
  url: string;
  children: (data: T | null) => ReactNode;
}

const Fetch = <T,>({ url, children }: FetchProps<T>) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return <>{children(data)}</>;
};

export default Fetch;
