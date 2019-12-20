/**
 * Created by TzuHsing on 2019-12-18
 */
import React, {Component} from 'react';
import {connect} from "react-redux"
import { Button ,Input} from 'antd';
import * as mapDispatchToProps from "./action"

class InputText extends Component {
    constructor() {
        super();
        this.state = {
            inputValue : ''
        }
    }
    onHandleChangeValue = (e)=>{
        this.setState({inputValue:e.target.value})
    }
    onHandleSubmit = ()=>{
        this.props.changeTitle(this.state.inputValue)
    }
    render() {
        return (
            <div>
                <label htmlFor="editTitle" >修改title</label><br/>
                <Input
                    onChange={this.onHandleChangeValue}
                    type="text"
                    id="editTitle"
                    style={{width:'200px'}}
                    value={this.state.inputValue}/>
                <Button onClick={this.onHandleSubmit}>确定</Button>
                <br/>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps)(InputText);