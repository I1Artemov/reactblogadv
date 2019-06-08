import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR } from './commentListConstants.jsx';
import { Href_BlogPostController_GetComments } from "../../const.jsx";
import "isomorphic-fetch";

export function receiveComments(data) {
    return {
        type: GET_COMMENTS_SUCCESS,
        commentsInfo: data
    };
}

export function errorReceive(err) {
    return {
        type: GET_COMMENTS_ERROR,
        error: err
    };
}

export function getCommentsForPost(postId) {
    return (dispatch) => {
        let queryTrailer = '?postId=' + postId;

        fetch(Href_BlogPostController_GetComments + queryTrailer)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch(receiveComments(data));
            }).catch((ex) => {
                dispatch(errorReceive(ex));
            });
    };
}