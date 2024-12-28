import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        if(!response.ok) {
          throw new Error('Could not fetch data.');
        }
        const result = await response.json();
        setData(result.data);
      } catch(err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
        {children}
    </DataContext.Provider>
  )
};

export default DataContext;