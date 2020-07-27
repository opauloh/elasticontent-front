import API from '../helpers/fakeApi';
export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(
  inbox
  // , goals
) {
  return {
    type: RECEIVE_DATA,
    inbox
    // goals
  };
}

export function handleInitialData() {
  return (dispatch) => {
    Promise.all([
      API.fetchInbox()
      // , API.fetchGoals()
    ]).then(
      ([
        inbox
        // , goals
      ]) => {
        dispatch(
          receiveData(
            inbox
            // , goals
          )
        );
      }
    );
  };
}
