import {useSelector, useDispatch } from 'react-redux';
import TableItem from './TableItem/TableItem.jsx';

function Table() {
   const airLines = useSelector(store => store.airLines);

    return (

     <table>
            <thead>
                <tr>
                    <th>Airlines</th>
                    <th>Planes</th>
                </tr>
            </thead>
            <tbody>
                  {airLines.map((item, i) => (
                            <TableItem item={item} key={i}/>
                                             ))}           
            </tbody>
        </table>

    );

}


export default Table;
