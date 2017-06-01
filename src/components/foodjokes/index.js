import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { isLoggedIn } from '../../utils/AuthService';
import { getFoodData } from '../../utils/chucknorris-api';


class FoodJokes extends Component {

  state = { jokes: [] };

  getFoodJokes() {
    getFoodData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getFoodJokes();
  }

  render({}, { jokes }) {

    return (
      <div>
        <h3 class="text-center">Chuck Norris Food Jokes</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div class="col-sm-6" key={index}>
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div class="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div class="col-sm-12">
          { isLoggedIn() ?
          <div class="jumbotron text-center">
            <h2>View Celebrity Jokes</h2>
            <Link class="btn btn-lg btn-success" href='/special'> Celebrity Jokes </Link>
          </div> : <div class="jumbotron text-center"><h2>Get Access to Celebrity Jokes By Logging In</h2></div>
          }
        </div>
      </div>
    );
  }
}

export default FoodJokes;