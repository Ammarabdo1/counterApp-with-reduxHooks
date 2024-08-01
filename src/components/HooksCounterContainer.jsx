import React from "react";
import {useSelector ,useDispatch} from 'react-redux'
import {increase , decrease} from '../redux/countActions'

const HooksCounterContainer = () => {

    const count = useSelector(s => s.count)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(increase())}>+</button>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(decrease())}>-</button>
    </div>
  );
};

export default HooksCounterContainer;
