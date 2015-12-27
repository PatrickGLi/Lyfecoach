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
      user_id: parseInt(this.props.userId),
      commenter_id: ReactConstants.CURRENT_USER,
      content: this.state.content
    };

    CommentActions.addComment(commentData);

    this.setState({ content: ""});
  },

  render: function() {
    var comments;
    if (typeof this.props.comments === "undefined") {
      comments = <div></div>;
    } else {
      comments = this.props.comments.map(function(comment, index) {
        return (<li key={index}><b>{comment.commenter}:</b> {comment.content}</li>);
      });
    }

    return(
      <div className="comments-container">
        <div className="comments-list-container">
          <ul className="comments-list">
            {comments}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-md-6 add-comment">
            <br/>
            <textarea valueLink={this.linkState('content')}
                      rows="6" cols="50"
                      id="form-content"
                      className="form-control"
                      placeholder="say something">
            </textarea>
            <button type="submit" className="btn btn-primary form-button btn-lg btn-block">submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Comments;
