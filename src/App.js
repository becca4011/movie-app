import React from 'react';
import axios from 'axios';
import Movie from './Movie';

// props.fav === {fav} (props 안의 값인 fav를 가져오는 방법)

// {array.map(function => (<Component name = {array.name} />))}
// array 안의 name을 하나씩 가져와서, Component의 인자에 들어감

// Component.propTypes = {name: PropTypes.[type].isRequired};
// PropTypes로 string, number, array, boolean, object 등을 체크할 수 있음

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // axios가 끝날 때 까지 기다림
    // async를 사용해야 await를 사용 가능
    this.setState({ movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies();
  }

  // setState()를 사용하면 render() 호출
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {/* 삼항연산자 */}
        {isLoading ? "Loading..." : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.id}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    );
  }
}

export default App;
