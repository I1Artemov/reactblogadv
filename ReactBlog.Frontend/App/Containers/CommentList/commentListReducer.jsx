import { GET_COMMENTS_SUCCESS, GET_COMMENTS_ERROR, ALLOCATE_ELEMENT_FOR_COMMENTS_BLOCK_IN_STATE } from './commentListConstants.jsx';
import { MAX_POSTS_ON_PAGE } from '../Blog/blogConstants.jsx';

export const getDefaultStateElement = function() {
    return {
        postId: null,
        isFilled: false,
        commentsInfo: [],
        error: ""
    };
};

// В начальном состоянии храним отдельно стейты блоков комментов для каждого из отображаемых постов
const getInitialState = function() {
    let initialState = new Array();
    for (let i = 0; i < MAX_POSTS_ON_PAGE; i++) {
        initialState.push(getDefaultStateElement());
    }
    return initialState;
};

export default function commentList(state = getInitialState(), action) {
    switch (action.type) {
        case ALLOCATE_ELEMENT_FOR_COMMENTS_BLOCK_IN_STATE:
            {
                // Проверяем, выделен ли элемент стейта для комментов поста с заданным Id
                let isAlreadyHaveElementWithPostId = state.filter(x => x.postId === action.postId).length !== 0;

                // Если не выделен, то задействуем первый попавшийся "незанятый слот" с postId == null
                if (!isAlreadyHaveElementWithPostId) {
                    return state.map(function(item) {
                        if (!isAlreadyHaveElementWithPostId && item.postId === null) {
                            isAlreadyHaveElementWithPostId = true;
                            return { ...item, postId: action.postId };
                        }
                        return { ...item };
                    });
                }
                return state;
            }

        case GET_COMMENTS_SUCCESS:
            {
                // Заполняем блок комментов только для выбранного поста
                let newState = state.map(function(item) {
                    if (item.postId === action.postId) {
                        return { ...item, isFilled: true, error: "", commentsInfo: action.commentsInfo};
                    }
                    return { ...item };
                });
                return newState;
            }

        case GET_COMMENTS_ERROR:
            {
                // Ошибка выборки комментов для одного из постов
                let newState = state.map(function (item) {
                    if (item.postId === action.postId) {
                        return { ...item, isFilled: false, error: action.err, commentsInfo: [] };
                    }
                    return { ...item };
                });
                return newState;
            }

        default:
            return state;
    }
}