import { h, Component } from 'preact';
import { setIdToken, setAccessToken } from '../../utils/AuthService';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/special";
  }

  render() {
    return null;
  }
}

export default Callback;
