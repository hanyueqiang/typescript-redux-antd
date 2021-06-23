/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getParameterByName } from '@/utils/tools'
import type { GlobalProps, AppState } from "@/redux/data.d"
import { getAuth, getRoutes } from "@/redux/actions/global.actions";

const Index: FC = (props) => {
  const { isLogin }: GlobalProps = useSelector((state: AppState) => state.global);
  const dispatch = useDispatch();
  const sid = getParameterByName('sid')
  useEffect(() => {
    const sid = getParameterByName('sid')
    if (sid) {
      dispatch(getAuth({
        sid,
        ref: 'xxxx'
      }));
    } else {
      dispatch(getRoutes());
    }
  }, [])

  if (sid && !isLogin) {
    return <LoadingOutlined />
  }

  return <div style={{height: '100vh'}}>{props.children}</div>
}

export default Index
