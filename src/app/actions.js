// import API from '../helpers/fakeApi';
import axios from 'axios';
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
    axios.get('/inbox').then((response) => {
      dispatch(receiveData(response.data));
    });
    // Promise.all([
    //   API.fetchInbox()
    //   // , API.fetchGoals()
    // ]).then(
    //   ([
    //     inbox
    //     // , goals
    //   ]) => {
    //     dispatch(
    //       receiveData(
    //         inbox
    //         // , goals
    //       )
    //     );
    //   }
    // );
  };
}
