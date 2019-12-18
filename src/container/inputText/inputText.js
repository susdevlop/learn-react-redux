/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
    render() {
        return (
            <div>
                <label htmlFor="editTitle">修改title</label>
                <input type="text" id="editTitle"/><button>确定</button>
                <br/>
            </div>
        );
    }
}

InputText.propTypes = {};

export default InputText;