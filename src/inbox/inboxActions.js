export const TOGGLE_STARRED_INBOX_CARD = 'TOGGLE_STARRED_INBOX_CARD';
export const SET_VIEWED_INBOX_CARD = 'SET_VIEWED_INBOX_CARD';
export const SET_ACTIVE_INBOX_CARD = 'SET_ACTIVE_INBOX_CARD';

function setActiveInboxCard(card) {
  return {
    type: SET_ACTIVE_INBOX_CARD,
    card
  };
}

function setViewedInboxCard(card) {
  return {
    type: SET_VIEWED_INBOX_CARD,
    card
  };
}

function toggleStarredInboxCard(card) {
  return {
    type: TOGGLE_STARRED_INBOX_CARD,
    card
  };
}

export function handleSetViewedInboxCard(card) {
  return (dispatch) => {
    dispatch(setViewedInboxCard(card));
  };
}

export function handleSetActiveInboxCard(card) {
  return (dispatch) => {
    dispatch(setActiveInboxCard(card));
  };
}

export function handleToggleStarredInboxCard(card) {
  return (dispatch) => {
    dispatch(toggleStarredInboxCard(card));
    // return API.saveTodoToggle(id).catch(() => {
    //   dispatch(toggleTodo(id));
    //   alert('An error occurred. Try again.');
    // });
  };
}
