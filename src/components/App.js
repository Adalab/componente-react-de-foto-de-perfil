import React from 'react';
import GetAvatar from './GetAvatar';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatar: '' };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  render() {
    return (
      <div>
        <GetAvatar avatar={this.state.avatar} updateAvatar={this.updateAvatar} />
        <Profile avatar={this.state.avatar} />
      </div>
    );
  }
}

export default App;
