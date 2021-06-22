
import { queryAuth } from './api'
import { Dispatch } from 'redux'



interface ActionsTypes {
  type: string;
  payload: any;
}

// Actions
const UPDATE = 'GLOBAL_UPDATE'

// Reducer
const initState = {
  isLogin: false,
  routes: [],
  userInfo: {
    name: '',
  },
}

// Action Creators
export const globalUpdate = (params: any) => ({
  payload: params,
  type: UPDATE,
})

// 通过sid获取token、菜单项
export const getAuthOrTree = (params: any) => async (dispatch: Dispatch) => {
  const result:any = await queryAuth(params)
  if (result) {
    const { name } = result
    // Tools.setLocalStorage('token', token)
    // const { User } = Tools.parseTokenGetUser(token)
    // const assignRoutes = Tools.assignmentTree(routes)
    // const routeSource = Tools.structureTree(assignRoutes, 'id', 'pid', 'routes')
    // const prevRath = localStorage.getItem('prevPath')
    // const menuKey = Tools.getRouteKey(prevRath)
    dispatch(globalUpdate({
      init: true,
      userInfo: {
        name,
      },
    }))
  }
}

export default (state = initState, action: ActionsTypes) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
