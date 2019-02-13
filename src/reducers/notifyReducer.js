import { NOTIFY_USER } from "../actions/types";

const initalState = {
  message: null,
  messageType: null
};

export default function(state = initalState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    default:
      return state;
  }
}
