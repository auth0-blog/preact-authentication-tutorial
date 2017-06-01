import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { login, logout, isLoggedIn } from '../../utils/AuthService';
import '../../app.css';

export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" href="/">Chuck Norris World</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link href="/">Food Jokes</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link href="/special">Celebrity Jokes</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
};
