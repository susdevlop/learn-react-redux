import React, {Component} from 'react';
import './App.css';
import Title from "./container/title/title"
import ShowLi from "./container/showLi/showLi"
import InputText from "./container/inputText/inputText"
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    return (
        <div>
            <Title />
            <ShowLi />
            <InputText />
        </div>
    );
  }
}

App.propTypes = {};

export default App;