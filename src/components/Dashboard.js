import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = ({tweets}) => ({
    tweetIDs: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
})

export default connect(mapStateToProps)(Dashboard)