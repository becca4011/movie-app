import React from 'react';

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

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000); // 6초 후에 isLoading을 false로 바꿈
  }

  // setState()를 사용하면 render() 호출
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
