import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from './blogConstants.jsx';
import { Href_BlogPostController_GetPosts } from "../../const.jsx";
import "isomorphic-fetch";

export function receivePosts(data) {
    return {
        type: GET_POSTS_SUCCESS,
        postsAndPagingInfo: data
    };
}

export function errorReceive(err) {
    return {
        type: GET_POSTS_ERROR,
        error: err
    };
}

export function getPosts(pageNumber = 0, tag) {
    return (dispatch) => {
        let queryTrailer = '?page=' + pageNumber;
        if (tag) {
            queryTrailer += '&tag=' + tag;
        }

        fetch(Href_BlogPostController_GetPosts + queryTrailer)
            .then((response) => {
                return response.json();
            }).then((data) => {
                dispatch(receivePosts(data));
            }).catch((ex) => {
                dispatch(errorReceive(ex));
            });
    };
}