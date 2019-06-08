import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from './blogConstants.jsx';

const initialState = {
    postsAndPagingInfo: {
        modelsList: [],
        pagingInfo: { currentPage: 0, totalPages: 0, itemsPerPage: 0, totalItems: 0 }
    },
    error: ""
};

export default function blog(state = initialState, action) {
    switch (action.type) {
    case GET_POSTS_SUCCESS:
            return { ...state, postsAndPagingInfo: action.postsAndPagingInfo, error: '' };

    case GET_POSTS_ERROR:
        return { ...state, error: action.error };

    default:
        return state;
    }
}