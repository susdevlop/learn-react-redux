import {combineReducers} from 'redux'
import getShowLi from './container/showLi/reducer'
import getTitle from './container/title/reducer'

export default combineReducers({
    getTitle,
    getShowLi
})