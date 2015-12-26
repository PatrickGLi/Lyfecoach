var React = require('react'),
    CommentActions = require('../../actions/comment_actions'),
    CommentStore = require('../../stores/comment_store'),
    ReactConstants = require('../../constants/react_constants'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var Comments = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return({ content: "" });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var commentData = {
      userId: parseInt(this.props.userId),
      content: this.state.content
    };

    CommentActions.addComment(commentData);
  },

  render: function() {
    var comments;
    if (typeof this.props.comments === "undefined") {
      comments = <div></div>;
    } else {
      comments = this.props.comments.map(function(comment, index) {
        if (comment.userId === ReactConstants.CURRENT_USER) {
          return (
            <li key={index}>
              <b>{comment.user}:</b> {comment.content}
              <button className="btn btn-primary user-button"
                      onClick={this.deleteComment}>X</button>

            </li>
          );
        } else {
          return (<li key={index}><b>{comment.user}:</b> {comment.content}</li>);
        }
      });
    }

    return(
      <div className="comments-container">
        <div className="comments-list-container">
          <ul>
            {comments}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="form-content">add a comment</label>
            <textarea valueLink={this.linkState('content')}
                      rows="6" cols="50"
                      id="form-content"
                      className="form-control">
            </textarea>
            <button type="submit" className="btn btn-primary form-button btn-lg btn-block">submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Comments;
