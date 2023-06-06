import { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';

function InputForm(props) {
    const [airLine, setAirLine] = useState('');
    const [planes, setPlanes] = useState(0);
   
    const dispatch = useDispatch();
       const handleSubmit = (event) => {
                event.preventDefault();
                dispatch({type:"ADD", data: {airLine: airLine, planes: planes}});
                setAirLine('');
                setPlanes(0);
        }


    return(
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
    );

}

export default InputForm;
