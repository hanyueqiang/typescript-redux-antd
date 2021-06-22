import { UpdateActionProps, UPDATE } from "../actions/global.actions";
// type Actions = ReturnType<typeof addPerson> | ReturnType<typeof removePerson>;

type UserInfoProps = {
  id: string;
  name: string;
}
type RoutesProps = {
  name: string;
  id: number;
  path: string;
}

export type GlobalProps = {
  isLogin: boolean;
  userInfo: UserInfoProps;
  routes: RoutesProps[]
};

const initialState: GlobalProps = {
  isLogin: false,
  userInfo: {
    name: '张三',
    id: ''
  },
  routes: [],
};

export default function globalReducer(state = initialState, action: UpdateActionProps) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}
