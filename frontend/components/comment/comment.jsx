var React = require('react'),
    CommentActions = require('../../actions/comment_actions'),
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
    return(
      <div>I am the comments
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
