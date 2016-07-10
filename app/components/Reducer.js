import { combineReducers } from 'redux';
import { FETCH_MSG, RECEIVE_MSG } from './Action';

function getMsg(state = {}, action) {
    switch (action.type) {
        case FETCH_MSG:
            return Object.assign({}, state, {
                isloading: true,
                haserror: false,
                errorstring: ''
            });
        default: return state;
    }
}

function receiveMsg(state = {}, action) {
    switch (action.type) {
        case RECEIVE_MSG:

            let m = {};
            m[action.msgid] =  action.msg;

            return Object.assign({}, state, {
                isloading: false,
                haserror: false,
                errorstring: '',
                currentmsgid: action.msgid,
                msg : Object.assign({}, state.msg, m)
            });
        default: return state;
    }
}

const rootReducer = combineReducers({
  getMsg,
  receiveMsg
});


export default rootReducer;