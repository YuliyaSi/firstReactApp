// import {createSelector} from "reselect";

// primitive selector
export const getAllUsers = (state) => {
  return state.usersPage.users;
};

// common selector
// export const getAllUsersSelector = (state) => {
//   return getAllUsers(state).filter(u => u == true);
// };


// selector from reselect library
// export const getUserSuperSelector = createSelector(getAllUsers, (users) => {
//   return users.filter(u => true);
// })

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};