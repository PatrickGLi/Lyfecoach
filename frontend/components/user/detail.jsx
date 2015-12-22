var React = require('react'),
    UserStore = require('../../stores/user_store'),
    NavTransitions = require('../../util/nav_transitions'),
    UserDetailActions = require('../../actions/user_detail_actions'),
    IndexItem = require('../event/indexItem');

var UserDetail = React.createClass({
  getInitialState: function() {
    return ({ user: this.getStateFromStore() });
  },

  getStateFromStore: function() {
    return UserStore.fetch();
  },

  componentDidMount: function() {
    this.token = UserStore.addListener(this.showUserDetail);
    UserDetailActions.fetchSingleUser(parseInt(this.props.params.userId));
    NavTransitions.addNavTransitions();
  },

  componentWillUnmount: function() {
    this.token.remove();
    NavTransitions.removeNavTransitions();
    EventStore.clearEvents();
  },

  showUserDetail: function() {
    this.setState({ user: this.getStateFromStore() });
  },

  showEventDetail: function(event) {
    this.props.history.pushState(null, "api/users/" + event.organizer_id + "/events/" + event.id);
  },

  render: function() {
    var host = this.state.user;

    if (host === null) {
      return (<div></div>);
    } else {
      var showEventDetail = this.showEventDetail;
      var events = host.events.map(function(event) {
        var bindedClick = showEventDetail.bind(null, event);
        return (<IndexItem key={event.id}
                           onClick={bindedClick}
                           event={event}/>
               );
      });
    }

    var host_image = "http://res.cloudinary.com/dlqjek68b/image/upload/c_fill,h_200,w_300" + host.url;

    return (
      <div className="row user-info">
        <div className="col-md-6 col-md-offset-1">

          <div className="host-head">
            <div><h3>{host.host_name}</h3></div>
            <div><img src={host_image}/></div>
          </div>

          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About {host.host_name}
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="host-description panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                {host.description}
              </div>
            </div>
          </div>

          <div>{events}</div>
        </div>

        <div className="event-detail col-md-5 pull-right">
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = UserDetail;
