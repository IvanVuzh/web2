export const SET_START = "SET_START";
export const SET_DONE = "SET_DONE";
export const SET_ERROR = "SET_ERROR";
export const SET_PERCENT = "SET_PERCENT";


const initialState = {
    status: "Not started",
    percent: "",
};

export default function rootReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_START:
            return { status: "start", percent: "0%" };
        case SET_DONE:
            return { status: "done", percent: "100%" };
        case SET_ERROR:
            return { ...state, status: "error" }
        case SET_PERCENT:
            return { ...state, percent: payload }
        default:
            return state;
    }
}
