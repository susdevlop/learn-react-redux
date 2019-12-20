/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import PropTypes from 'prop-types';

class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

Title.propTypes = {
    title : PropTypes.string.isRequired
};
const mapStateToProps = (store)=>{
    return {
        title : store.getTitle.title
    }
}
export default connect(mapStateToProps,null)(Title);