import { useDispatch } from 'react-redux'
import { useEffect } from "react"
import {SET_START, SET_DONE, SET_ERROR, SET_PERCENT} from "../../redux/reducer";
import { v4 as uuidv4 } from 'uuid';

const useOpenWebSocket = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const id = uuidv4();
        const ws = new WebSocket(`${process.env.REACT_APP_API_URL_SOCKET || 'ws://localhost/api/socket/ws?id='}${id}`);
        ws.onmessage = messageHandler
        return () => ws.close()
    }, [])

    const messageHandler = (message) => {
        switch (message.data) {
            case 'Done':
                dispatch({
                    type: SET_DONE,
                });
                break;
            case 'Start':
                dispatch({
                    type: SET_START,
                });
                break;
            case 'Error':
                dispatch({
                    type: SET_ERROR,
                });
                break;
            default:
                dispatch({
                    type: SET_PERCENT,
                    payload: message.data
                });
        }
    }
}

export default useOpenWebSocket;