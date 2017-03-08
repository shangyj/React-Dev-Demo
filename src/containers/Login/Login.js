import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Locker from 'material-ui/svg-icons/action/lock-outline';
import {
  pinkA200
} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

import './login.less';

class flexpage extends Component {
  constructor(props){
    super(props)
  }
  handlelogin(){
    window.location.href = "/page1";
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="app-login-container">
          <Paper className="app-login-box" zDepth={1}>
            <div className="app-login-avatar">
              <Avatar icon={<Locker />}
                backgroundColor={pinkA200}
                size={60}
                />
            </div>
            <form>
              <div style={{padding:'0px 1em 1em'}}>
                <p style={{'textAlign':'center',color:'#cccccc'}}>Hint: root / root</p>
                <TextField
                  floatingLabelText="Username"
                  />
                <br />
                <TextField
                  type="password"
                  floatingLabelText="Password"
                  />
              </div>
              <div style={{padding:"0.5em"}}>
                <RaisedButton label="Sing In" primary={true} fullWidth={true} onClick={this.handlelogin}/>
              </div>
            </form>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }

}
export default flexpage;
