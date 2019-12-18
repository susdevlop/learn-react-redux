import {combineReducers} from 'redux'
import getInputText from './container/inputText/reducer'
import getShowLi from './container/showLi/reducer'
import getTitle from './container/showLi/reducer'
export default combineReducers({
    getInputText,
    getShowLi,
    getTitle
})