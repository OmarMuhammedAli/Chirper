import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount(){
    
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {loading} = this.props
    return (
      <div>
        {
          loading? <h3 className='center'>Loading...</h3>
          :
          <Dashboard/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App)