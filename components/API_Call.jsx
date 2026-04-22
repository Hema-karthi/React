import { useEffect, useState } from "react";

const API_Call = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((result) => {
        // filter using shared ID
        const filteredData = result.filter((item) => item.id === id);
        setData(filteredData);
      });
  }, [id]);

  return data;
};

export default API_Call;