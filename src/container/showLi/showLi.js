/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShowLi extends Component {
    render() {
        return (
            <div>
                <label htmlFor="addLi">增加li</label>
                <input type="text" id="addLi"/><button>确定</button>
                <br/>
            </div>
        );
    }
}

ShowLi.propTypes = {};

export default ShowLi;