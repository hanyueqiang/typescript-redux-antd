import { AddPersonAction, RemovePersonAction } from "../actions/index";
// import actionTypes from "../actions/actionTypes";
import { Person } from "../data";

// type Actions = ReturnType<typeof addPerson> | ReturnType<typeof removePerson>;
type Actions = AddPersonAction | RemovePersonAction;

const initialState: Person[] = [{ id: 1, name: "小萝莉" }];

export default function peopleReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case "AddPerson":
      return state.concat([
        {
          id: (Math.random() * 1000000),
          name: action.payload,
        },
      ]);
    case "RemovePerson":
      return state.filter((person) => person.id !== action.payload);
    default:
      break;
  }
  return state;
}
