import {
  SET_VIEWED_INBOX_CARD,
  SET_ACTIVE_INBOX_CARD,
  TOGGLE_STARRED_INBOX_CARD
} from './inboxActions';
import { RECEIVE_DATA } from '../app/actions';

export default function inbox(state = [], action) {
  switch (action.type) {
    case SET_VIEWED_INBOX_CARD:
      return state.concat([action.inbox]);
    case SET_ACTIVE_INBOX_CARD:
      return state.map((card) =>
        card.id !== action.card.id
          ? { ...card, active: false }
          : { ...card, active: true, new: false }
      );
    case TOGGLE_STARRED_INBOX_CARD:
      return state.map((card) =>
        card.id !== action.card.id ? card : { ...card, starred: !card.starred }
      );
    case RECEIVE_DATA:
      return action.inbox;
    default:
      return state;
  }
}
