
import type { Dispatch } from "redux";

export const UPDATE = 'GLOBAL_UPDATE'

export type UpdateActionProps = {
  readonly type: typeof UPDATE;
  readonly payload: any;
};

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const UpdateAction = (params: any) => ({
  type: UPDATE,
  payload: params,
})

export const getUserInfo = (personName: string) => async (
  dispatch: Dispatch
) => {
  console.log(personName)
  await wait(200);
  dispatch(UpdateAction({
    userInfo: {
      name: personName,
      id: 'xxxxxqeee'
    },
  }))
};

interface AuthParamsProps {
  sid: string;
  ref: string;
}
export const getAuth = (params: AuthParamsProps) => async (
  dispatch: Dispatch
) => {
  console.log(params)
  await wait(2500);
  dispatch(UpdateAction({
    userInfo: {
      name: '木木',
      id: 'xxxxxqeee'
    },
    isLogin: true,
  }))
};

export  const getRoutes = () => async (
  dispatch: Dispatch
) => {
  await wait(2000);
  dispatch(UpdateAction({
    routes: [{
      name: 'demo',
      id: 123,
      path: 'xxxx'
    }],
  }))
};

