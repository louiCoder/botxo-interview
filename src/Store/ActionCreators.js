import * as ACTIONS from './Actions';

// get all users
export const getAllUsersAction = () => ({
  type: ACTIONS.GET_USERS_ACTION
});

export const getAllUsersSuccessful = (payload) => ({
  type: ACTIONS.GET_USERS_SUCCESSFUL,
  payload
});

export const getAllUsersFailed = (error) => ({
  type: ACTIONS.GET_USERS_FAILED,
  error
});

// add user to generic list
export const addGenericUser = (name, age) => ({
  type: ACTIONS.ADD_GENERIC_USER_ACTION,
  name,
  age
});

// add user to specific list
export const addSpecificUser = (name, age) => ({
  type: ACTIONS.ADD_SPECIFIC_USER_ACTION,
  name,
  age
});

// remove generic user from list of generic users
export const removeGenericUserAction = (name) => ({
  type: ACTIONS.REMOVE_GENERIC_USER_ACTION,
  name
});

// remove specific user from list of specific users
export const removeSpecificUserAction = (name) => ({
  type: ACTIONS.REMOVE_SPECIFIC_USER_ACTION,
  name
});

// send generic list of users
export const sendDataSortedByNameAction = () => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_NAME_ACTION
});

export const sendDataSortedByNameSuccessful = (payload) => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_NAME_SUCCESSFUL,
  payload
});

export const sendDataSortedByNameFailed = (error) => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_NAME_FAILED,
  error
});

// send specific list of users
export const sendDataSortedByAgeAction = () => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_AGE_ACTION
});

export const sendDataSortedByAgeSuccessful = (payload) => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_AGE_SUCCESSFUL,
  payload
});

export const sendDataSortedByAgeFailed = (error) => ({
  type: ACTIONS.SEND_DATA_SORTED_BY_AGE_FAILED,
  error
});
