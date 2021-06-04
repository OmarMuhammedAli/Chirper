import {RECEIVE_TWEETS, TOGGLE_TWEET} from '../actions/tweets'

const tweets = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET:
            return {
                ...state,
                [action.id]: tweet(state[action.id], action)
            }
        default: 
            return state
    }
}

const tweet = (state={}, action) => {
    switch(action.type) {
        case TOGGLE_TWEET:
            return {
                ...state,
                likes: action.hasLiked
                ? state.likes.filter(userId => userId !== action.authedUser)
                : [...state.likes, action.authedUser]
            }
        default:
            return state
    }
}
export default tweets