import { CHANGE_ID } from "./actions";

const changeId = (id) => {
  return {
    type: CHANGE_ID,
    payload: id,
  }
}

export default changeId;
