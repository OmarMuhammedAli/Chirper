import React, { Component } from "react";
import {connect} from 'react-redux'
import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: "",
  };

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState({
      text,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const {dispatch, id} = this.props

    // save new tweet to store
    dispatch(handleAddTweet(text, id))

    console.log("New Tweet: ", text);
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    {/**Redirect to / if submitted */}
    const charactersLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleTextChange}
            className="textarea"
            maxLength={280}
          />
          {charactersLeft <= 100 && (
            <div className="tweet-length">{charactersLeft}</div>
          )}
          <button className="btn" type="submit" disabled={text.length < 1}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}


export default connect()(NewTweet)