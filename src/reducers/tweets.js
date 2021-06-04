import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: tweet(state[action.id], action),
      };
    case ADD_TWEET:
      let replyingTo = {};
      if (action.tweet.replyingTo) {
        replyingTo = {
          [action.tweet.replyingTo]: {
            ...state[action.tweet.replyingTo],
            replies: [
              ...state[action.tweet.replyingTo].replies,
              action.tweet.id,
            ],
          },
        };
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo,
      };
    default:
      return state;
  }
};

const tweet = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_TWEET:
      return {
        ...state,
        likes: action.hasLiked
          ? state.likes.filter((userId) => userId !== action.authedUser)
          : [...state.likes, action.authedUser],
      };
    default:
      return state;
  }
};
export default tweets;
