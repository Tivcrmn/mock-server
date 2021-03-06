import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "store/auth";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { showAlert } from "store/alert";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  handlInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async _login(state) {
    const { login, showAlert } = this.props;
    let res = await login(state);
    if (res.success) {
      this.props.history.push("/");
    } else {
      showAlert("login failed");
    }
  }

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: 200 }}>
        <h2>Mock Server</h2>
        <div>
          <TextField
            label="userName"
            value={this.state.userName}
            name="userName"
            style={{ width: 200 }}
            onChange={this.handlInputChange}
          />
        </div>
        <div>
          <TextField
            label="password"
            value={this.state.password}
            name="password"
            type="password"
            style={{ width: 200 }}
            onChange={this.handlInputChange}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this._login(this.state)}
          style={{ width: 200, marginTop: 10 }}
        >
          Login
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login,
  showAlert,
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
