import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const api = "https://api.thecatapi.com/v1/images/search?limit=10"
  const [data, setData] = useState([]);
  console.log(data)

  useEffect(() => {
    axios.get(api)
      .then(res => setData(res.data))
      .catch(err => console.log(err))

  }, []);
  console.log(data)
  return (
    <div className="App p-5">
      <h1>Cat images:</h1>
      {
        data.map(cat => <div className='m-5'>
          <img src={cat.url}></img>
        </div>)
      }
    </div>
  );
}

export default App;
