import {saveLikeToggle, saveTweet} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export const receiveTweets = tweets => {
    return {
        type: RECEIVE_TWEETS,
        tweets,
    }
}

const addTweet = (tweet) => ({
    type: ADD_TWEET,
    tweet
})

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

export const handleAddTweet = (text, replyingTo = null) => async (dispatch, getState) =>{
    const {authedUser} = getState()
    dispatch(showLoading())
    const tweet = await saveTweet({
        text,
        author: authedUser,
        replyingTo
    })
    console.log(tweet)
    dispatch(addTweet(tweet))
    dispatch(hideLoading())
}