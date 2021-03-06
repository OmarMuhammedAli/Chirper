import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_USER = 'tylermcginnis'

export const handleInitialData = () => async (dispatch) => {
    dispatch(showLoading())
    const { users, tweets } = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveTweets(tweets))
    dispatch(setAuthedUser(AUTHED_USER))
    dispatch(hideLoading())
}