import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

function App() {
    const [airLine, setAirLine] = useState('');
    const [planes, setPlanes] = useState(0);
    const airLines = useSelector(store => store.airLines);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
            event.preventDefault();
            dispatch({type:"ADD", data: {airLine: airLine, planes: planes}});
            setAirLine('');
            

    }


  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
          <input placeholder='Airline Name'
                 type="text"
                  value={airLine}
                  onChange={(e) => setAirLine(e.target.value)}/>
 
          <input placeholder='Number of Planes'
                 type="number"
                  value={planes}
                  onChange={(e) => setPlanes(e.target.value)}/>         

          <button type="submit">Add Airline</button>
      
      </form> 
      <table>
        <thead>
            <tr>
                <th>Airlines</th>
                <th>Planes</th>
            </tr>
        </thead>
        <tbody>
              {airLines.map((item, i) => (
                        <tr key={i}>
                           <td>{item.airLine}</td> 
                           <td>{item.planes}</td> 
                        </tr>
              ))}           
        </tbody>
    </table>
    </div>
  );
}

export default App;
