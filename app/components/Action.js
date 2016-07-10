import 'whatwg-fetch';

export const FETCH_MSG = 'FETCH_MSG';
export const RECEIVE_MSG = 'RECEIVE_MSG';

function fetchMsgAction(msgid) {
    return {type: FETCH_MSG, msgid};
};

function receiveMsgAction(msgid, json) {
    return {type: RECEIVE_MSG, msgid, msg: json};
};

export function fetchMsgs(msgid) {

    return function(dispatch) {
        // Start!
        dispatch(fetchMsgAction(msgid));

        // Fetch
        return fetch(`http://localhost:8080/msg${msgid}.json`)
                .then(response => response.json())
                .then(json => {
                    dispatch(receiveMsgAction(msgid, json))
                });

    }
}