import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export const receiveTweets = tweets => {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

const toggleTweet = ({id, authedUser, hasLiked}) => ({
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
})

export const handleToggleTweet = (info) => (dispatch) => {
    dispatch(toggleTweet(info))
    saveLikeToggle(info)
    .catch(e => {
        console.warn('Error occured in handleToggleTweet action creator: ', e)
        dispatch(toggleTweet)
        alert('An error occured')
    })
}