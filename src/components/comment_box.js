import React, { Component } from 'react';
import { connect } from 'react-redux'; 
// import { bindActionCreators } from '../../../../../.cache/typescript/2.7/node_modules/redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// DO NOT FORGET BRACES WHEN EXPORTED NOT DEFAULT!!! CREATES A DIFFICULT TO DEBUG ERROR.
// import { saveComment } from '../actions';



class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }
  
  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a comment</h4>
        <textarea 
          value = {this.state.comment}
          onChange = {this.handleChange.bind(this)}
        />
        <div>
          <button action='submit'>Submit Comment</button>
        </div>
      </form>
    );
  }
}

/* 
function mapDispatchToProps(dispatch){
  return bindActionCreators({ saveComment: saveComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);
*/
 

// to map all of the actions imported, pass it to connect
export default connect(null, actions)(CommentBox);
