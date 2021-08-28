import React from 'react';
import PropTypes from "prop-types";

// props.fav === {fav} (props 안의 값인 fav를 가져오는 방법)

// {array.map(function => (<Component name = {array.name} />))}
// array 안의 name을 하나씩 가져와서, Component의 인자에 들어감

// Component.propTypes = {name: PropTypes.[type].isRequired};
// PropTypes로 string, number, array, boolean, object 등을 체크할 수 있음

class App extends React.Component {
  state = {
    // 바꿀 수 있는 data
    count: 0
  };

  // JavaScript 코드
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    // current : 현재 state
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  // setState()를 사용하면 render() 호출
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
