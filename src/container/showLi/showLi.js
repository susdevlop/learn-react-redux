/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import * as mapDispatchToProps from "./action"
import { Button ,Input,List} from 'antd';
import PropTypes from 'prop-types';

class ShowLi extends Component {
    constructor() {
        super();
        this.state = {
            inputValue : ''
        }
    }
    onHandleInput = (e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    onHandleSubmit = ()=>{
        const liSource = this.props.list;
        this.props.addLi([...liSource,this.state.inputValue])
    }
    render() {
        return (
            <div>
                <label htmlFor="addLi">增加li:</label><br/>
                <Input type="primary" id="addLi"  style={{width:'200px'}} onChange={this.onHandleInput} value={this.state.inputValue}/>
                <Button type="primary" onClick={this.onHandleSubmit}>确定</Button>
                <List
                    size="small"
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                    style={{width:'200px'}}
                />
                <br/>
                <br/>
            </div>
        );
    }
}
ShowLi.propTypes = {
    list : PropTypes.array.isRequired,
    addLi : PropTypes.func.isRequired
};

const mapStateToProps = (store)=>{
    return {
        list : store.getShowLi.list
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowLi);