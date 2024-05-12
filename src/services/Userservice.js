import React from "react";
import axios from 'axios';
const Userservice = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/api/data') 
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        {/* Display data received from the backend */}
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  };





export default Userservice;