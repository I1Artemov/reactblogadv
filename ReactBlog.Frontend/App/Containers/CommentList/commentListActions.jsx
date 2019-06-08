import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR, ALLOCATE_ELEMENT_FOR_COMMENTS_BLOCK_IN_STATE } from './commentListConstants.jsx';
import { Href_BlogPostController_GetComments } from "../../const.jsx";
import { getDefaultStateElement } from "./commentListReducer.jsx";
import "isomorphic-fetch";

export function receiveComments(data, postId) {
    return {
        type: GET_COMMENTS_SUCCESS,
        postId: postId,
        commentsInfo: data
    };
}

export function errorReceive(err, postId) {
    return {
        type: GET_COMMENTS_ERROR,
        postId: postId,
        error: err
    };
}

export function allocateElementForCommentsBlockInState(postId) {
    return {
        type: ALLOCATE_ELEMENT_FOR_COMMENTS_BLOCK_IN_STATE,
        postId: postId
    };
}

export function getCommentsForPost(postId) {
    return (dispatch) => {
        let queryTrailer = '?postId=' + postId;

        fetch(Href_BlogPostController_GetComments + queryTrailer)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch(receiveComments(data, postId));
            }).catch((ex) => {
                dispatch(errorReceive(ex, postId));
            });
    };
}

export function getInstanceStateByPostId(state, postId) {
    let foundElement = state.find(x => x.postId === postId);
    if (foundElement) return foundElement;

    return getDefaultStateElement();
}