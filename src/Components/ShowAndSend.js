import React from 'react';
import AllUsers from './AllUsers';
import { useSelector, useDispatch } from 'react-redux';
import { sendDataSortedByNameAction, sendDataSortedByAgeAction } from '../Store/ActionCreators';

export default function ShowAndSend () {
  const specificUsers = useSelector((state) => state.specificUsers);
  const genericUsers = useSelector((state) => state.genericUsers);
  const dispatch = useDispatch();

  const sendDataOrderedByAge = () => dispatch(sendDataSortedByAgeAction(specificUsers));

  const sendDataOrderedByName = () => dispatch(sendDataSortedByNameAction(genericUsers));

  return (
    <div>
      <AllUsers header="All users ordered by name" users={genericUsers} genericOrSpecific="generic" />
      <AllUsers header="All users ordered by age" users={specificUsers} genericOrSpecific="specific" />
      <div className="send-buttons">
        <button onClick={sendDataOrderedByAge}>send data order by age</button>
        <button onClick={sendDataOrderedByName}>send data order by name</button>
      </div>
    </div>
  );
}
