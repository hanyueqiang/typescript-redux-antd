import Http from '@/utils/http'

interface QueryAuthProps {
  id: string;
  name: string
}

// 获取tocken，菜单权限
export const queryAuth = (params: QueryAuthProps) => Http.get('/login', params)
export const queryMenuList = (params: QueryAuthProps) => Http.post('/menu/list', params)
