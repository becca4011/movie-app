import React from 'react';
import PropTypes from "prop-types";

// props.fav === {fav} (props 안의 값인 fav를 가져오는 방법)

// {array.map(function => (<Component name = {array.name} />))}
// array 안의 name을 하나씩 가져와서, Component의 인자에 들어감

// Component.propTypes = {name: PropTypes.[type].isRequired};
// PropTypes로 string, number, array, boolean, object 등을 체크할 수 있음

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
