import * as ACTIONS from './Actions';

const initialState = {
  users: [],
  specificUsers: [],
  genericUsers: []
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    // get all users
    case ACTIONS.GET_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.GET_USERS_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.GET_USERS_FAILED:
      return { ...state, loading: false };

    // add user to generic list
    case ACTIONS.ADD_GENERIC_USER_ACTION:
      return { ...state, loading: true };
    case ACTIONS.ADD_GENERIC_USER_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.ADD_GENERIC_USER_FAILED:
      return { ...state, loading: false };

    // add user to specific list
    case ACTIONS.ADD_SPECIFIC_USER_ACTION:
      return { ...state, loading: true };
    case ACTIONS.ADD_SPECIFIC_USER_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.ADD_SPECIFIC_USER_FAILED:
      return { ...state, loading: false };

    // send generic list
    case ACTIONS.SEND_GENERIC_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_GENERIC_USERS_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_GENERIC_USERS_FAILED:
      return { ...state, loading: false };

    // send specific list
    case ACTIONS.SEND_SPECIFIC_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_SPECIFIC_USERS_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_SPECIFIC_USERS_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};
