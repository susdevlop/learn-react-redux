/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    constructor() {
        super();
        this.state = {
            title:'this is title'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

Title.propTypes = {};

export default Title;