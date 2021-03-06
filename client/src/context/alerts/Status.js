import React, { useReducer } from 'react';
import alertReducer from '../alerts/Reducer';
import alertContext from '../alerts/Context';

import { SHOW_ALERT, HIDE_ALERT } from '../../types/Main';

const AlertState = props => {

    const initialState = {
        alert: null
    }
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        });
        // after 5 seconds clear the alert 
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 5000);
    }
    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;