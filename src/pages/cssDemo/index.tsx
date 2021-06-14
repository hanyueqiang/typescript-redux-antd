import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import type { Person, AppState } from "@/redux/data.d"
import { removePerson, addPerson } from "@/redux/actions/index";
import styles from './index.less'

const Index: React.FC = () => {
  const people: Person[] = useSelector((state: AppState) => state.people);
  const dispatch = useDispatch();
  console.log('people', people)
  const dispatchNewPerson = (id:number) => {
    console.log(id)
    dispatch(removePerson(id));
  }
  const addPersonHandle = () => {
    dispatch(addPerson('hello'));
  }
  return (
    <div className={styles.container}>
      <div onClick={addPersonHandle}>CSSDemo</div>
      {people.map(item => <button key={item.id} onClick={() => dispatchNewPerson(item.id)}>{item.name}</button>)}
    </div>
  );
};

export default Index;
