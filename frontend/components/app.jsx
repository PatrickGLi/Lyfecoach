var React = require('react'),
    NavBar = require('./nav_bar'),
    Footer = require('./footer');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">lyfecoach</h4>
              </div>
              <div className="modal-body">
                Lyfecoach is an event management application that lets users follow their favorite hosts and organizers, and keep updated wherever they go.
              </div>
              <div className="modal-body">
                Search and explore events anywhere. Follow friends and established organizers, or establish your professional presence as a host.
              </div>
              <div className="modal-footer">
                Developed by Patrick Li on Rails and React.
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">sorry</h4>
              </div>
              <div className="modal-body">
                Unfortunately, you can't actually buy tickets here. But you can explore, follow, and find details about your favorite events and organizers. If you really want tickets, you can leave your name and card info in a comment below and we'll get them for you.
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-body">
                You have to sign in first to host events.
              </div>
            </div>
          </div>
        </div>

        <NavBar history={this.props.history}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
