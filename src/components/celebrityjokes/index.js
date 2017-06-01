import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { getCelebrityData } from '../../utils/chucknorris-api';
import { login, logout, isLoggedIn } from '../../utils/AuthService';

class CelebrityJokes extends Component {

  state = { jokes: [] };

  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  render({}, { jokes }) {

    if(!isLoggedIn()) {
      return (
        <div class="jumbotron text-center">
          <h3> You need to be logged in to view celebrity jokes </h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
          <hr/>

          { jokes.map((joke, index) => (
                <div class="col-sm-6" key={index}>
                  <div class="panel panel-danger">
                    <div class="panel-heading">
                      <h3 class="panel-title"><span className="btn">#{ joke.id }</span></h3>
                    </div>
                    <div class="panel-body">
                      <p> { joke.joke } </p>
                    </div>
                  </div>
                </div>
            ))}

          <div class="col-sm-12">
            <div class="jumbotron text-center">
              <h2>View Food Jokes</h2>
              <Link class="btn btn-lg btn-success" ='/'>Chuck Norris Food Jokes </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CelebrityJokes;