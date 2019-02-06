import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Profile.css';

class Profile extends Component {
  render() {
    const {avatar} = this.props;
    return (
      <div className="profile">
        <div className="profile__avatar" style={{backgroundImage: `url(${avatar})`}}></div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired
};

export default Profile;