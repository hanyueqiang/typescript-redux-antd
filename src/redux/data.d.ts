// src/redux/data.d.ts

// 用户的字段类型
type Person = {
  id: number;
  name: string;
};

// 所有用户的类型
type AppState = {
  people: Person[];
};
export { Person, AppState }