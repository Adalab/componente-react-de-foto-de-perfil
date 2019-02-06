import React, { Component } from 'react';
import GetAvatar from './components/GetAvatar';
import Profile from './components/Profile';
import defaultImage from './components/defaultImage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage
      }
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(img) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, avatar: img};
      return {
        profile: newProfile,
        isAvatarDefault: false
      }
    });
  }

  render() {
    const {profile, isAvatarDefault} = this.state;
    return (
      <div className="App">
        <GetAvatar 
          avatar={profile.avatar} 
          isAvatarDefault={isAvatarDefault} 
          updateAvatar={this.updateAvatar} />
        
        <Profile avatar={profile.avatar} />
      </div>
    );
  }
}

export default App;
