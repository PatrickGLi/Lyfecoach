var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    UserStore = require('../../stores/user_store'),
    UserEditActions = require('../../actions/user_edit_actions');

var UserEdit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    this.user = UserStore.fetch();

    return({
      id: this.user.id,
      url: this.user.url,
      backgroundUrl: this.user.background_url,
      description: this.user.description
    });

  },

  addProfileImage: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({ url: "/" + results[0].path });
      }
    }.bind(this));
  },

  addBackgroundImage: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({ backgroundUrl: "/" + results[0].path });
      }
    }.bind(this));
  },

  updateProfile: function() {
    var that = this;
    UserEditActions.editProfile(this.state, function() {
      that.props.history.pushState(null, "api/users/" + that.props.params.userId);
    });
  },

  handleCancel: function() {
    this.props.history.pushState(null, "api/users/" + this.props.params.userId);
  },

  render: function() {
    var profileImage;

    if (this.state.url === this.user.url) {
      profileImage = <div></div>;
    } else {
      var profileUrl = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_300,w_300" + this.state.url;
      profileImage = <div className="image-holder"><img src={profileUrl}></img></div>;
    }

    var backgroundImage;

    if (this.state.backgroundUrl === this.user.background_url) {
      backgroundImage = <div></div>;
    } else {
      var backgroundUrl = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_300,w_300" + this.state.backgroundUrl;
      backgroundImage = <div className="image-holder"><img src={backgroundUrl}></img></div>;
    }

    return(
      <div className="edit-profile">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={this.updateProfile}>
              <button id="image-button"
                      onClick={this.addProfileImage}
                      className="btn btn-default form-control">
                      change profile photo
              </button>

              <button id="background-image-button"
                      onClick={this.addBackgroundImage}
                      className="btn btn-default form-control">
                      change cover photo
              </button>

              {profileImage}
              {backgroundImage}

              <label htmlFor="form-description">Description</label>
              <textarea valueLink={this.linkState('description')}
                       rows="6" cols="50"
                       id="form-description"
                       className="form-control">
              </textarea>

              <button type="submit" className="btn btn-primary form-button btn-lg btn-block">update profile</button>
            </form>
            <button className="btn btn-primary form-button"
                    onClick={this.handleCancel}>
                    cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserEdit;
