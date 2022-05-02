import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import buyEggs from '../redux/eggs/eggsAction';
function Eggs() {
    const numEggs = useSelector(state => state.eggs);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Eggs - {numEggs}</h1>
            <button onClick={()=>dispatch(buyEggs())}>Buy</button>
        </>
    )
}

export default Eggs;