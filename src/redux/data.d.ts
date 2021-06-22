
import type { GlobalProps } from './actions/global.actions'

// 所有用户的类型
type AppState = {
  global: GlobalProps;
};

export { GlobalProps, AppState }
