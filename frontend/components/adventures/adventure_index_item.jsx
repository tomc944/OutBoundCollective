var React = require('react');
var apiUtil = require('../../util/api_util');
var History = require('react-router').History;
var AdventureStar = require('./adventure_star');

var AdventureIndexItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return ({showTitle: false, checkingChild: false});
  },
  showAdventure: function() {
    if (false) {
      var adventureUrl = 'adventures/' + this.props.id;
      apiUtil.fetchAdventure(this.props.id);
      this.history.push(adventureUrl);
    }
  },
  onMouseEnter: function() {
    this.setState({showTitle: true});
  },
  onMouseLeave: function() {
    this.setState({showTitle: false});
  },
  getInfo: function(){
    if(this.state.showTitle){
      return  (<div className="adventure-index-item-label-text">
                 <p>{this.props.title}</p>
               </div>);
    }
  },
  checkChildClick: function() {
    this.setState({checkingChild: true})
  },
  render: function() {
    var photoUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_300/" + this.props.imageUrl;

    var backgroundImage = {
      backgroundImage: "url(" + photoUrl + ")"
    }

    if (this.state.showTitle) {
      var adventureClass = "adventure-index-item-title"
    } else {
      adventureClass = "adventure-index-item"
    }

    var starUrl = "http://res.cloudinary.com/dpdxfgx58/image/upload/h_30,w_30/v1452661171/Hopstarter-Soft-Scraps-Button-Favorite_bagcvj.ico"

    return (
      <li style={backgroundImage}
        className={adventureClass}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.showAdventure}>
        {this.getInfo()}
        <AdventureStar id={this.props.id} key={this.props.id}
                       childCheck={this.checkChildClick}/>
      </li>
    );
  }
});

module.exports = AdventureIndexItem;
