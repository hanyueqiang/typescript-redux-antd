import React from "react";
import { Button } from 'antd'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import type { GlobalProps, AppState } from "@/redux/data.d"
import { getUserInfo } from "@/redux/actions/global.actions";
import styles from './index.less'

const Index: React.FC = () => {
  const global: GlobalProps = useSelector((state: AppState) => state.global);
  const history = useHistory();
  const { userInfo } = global
  const dispatch = useDispatch();
  console.log('global', global)

  const addPersonHandle = () => {
    dispatch(getUserInfo('王二'));
  }
  const pushHistory = () => {
    history.push('/home')
  }
  return (
    <div className={styles.container}>
      <div onClick={pushHistory}>CSSDemo</div>
      <Button onClick={addPersonHandle}>获取信息</Button>
      <div>{JSON.stringify(userInfo)}</div>
    </div>
  );
};

export default Index;
