import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from './commentListConstants.jsx';

const initialState =
    {
    postId: -1,
    isFilled: false,
    commentsInfo: [],
    error: ""
    };

export default function commentList(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_SUCCESS:
            return { ...state, isFilled: true, commentsInfo: action.commentsInfo, error: '' };

        case GET_COMMENTS_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
}