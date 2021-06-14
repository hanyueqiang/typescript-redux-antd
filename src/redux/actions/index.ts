// src/redux/actions/index.ts

// import actionTypes from "./actionTypes";
import type { Dispatch } from "redux";

export type AddPersonAction = {
  readonly type: "AddPerson";
  readonly payload: string;
};

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export  const addPerson = (personName: string) => async (
  dispatch: Dispatch<AddPersonAction>
) => {
  await wait(200);
  dispatch({
    type: "AddPerson",
    payload: personName,
  } as const);
};

export type RemovePersonAction = {
  readonly type: "RemovePerson";
  readonly payload: number;
};

export  const removePerson = (id: number) => async (
  dispatch: Dispatch<RemovePersonAction>
) => {
  await wait(200);
  dispatch({
    type: "RemovePerson",
    payload: id,
  } as const);
};

