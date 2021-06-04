import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'

class Tweet extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='tweet'>
                
            </div>
        )
    }
}

const mapStateToProps = ({tweets, users, authedUser}, {id}) => {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
        tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
        : null,
        authedUser
    }
}
export default connect(mapStateToProps)(Tweet)