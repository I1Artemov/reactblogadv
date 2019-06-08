import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
    getCommentsForPost,
    allocateElementForCommentsBlockInState,
    getInstanceStateByPostId
} from './commentListActions.jsx';

class CommentList extends React.Component {
    componentDidMount() {
        this.props.allocateElementForCommentsBlockInState(this.props.postId);
    }

    render() {
        if (!this.props.isFilled) {
            return (
                <button type="button" onClick={() => { this.props.getCommentsForPost(this.props.postId); }}>
                    Загрузить комментарии
                </button>
            );
        }

        let comments = this.props.commentsInfo.map(item => {
            return (
                <li key={item.id} className="comment">
                    <div>Автор:{item.authorId}, {item.creationDateTime}</div>
                    <div className="comment-content">{item.body}</div>
                </li>
            );
        });

        return (
            <ul className="post-comments">
                {comments}
            </ul>
        );
    }
}

let mapStateToProps = (state, ownProps) => {
    let requiredInstance = getInstanceStateByPostId(state.commentListReducer, ownProps.postId);
    return {
        postId: ownProps.postId,
        isFilled: requiredInstance.isFilled,
        commentsInfo: requiredInstance.commentsInfo,
        error: requiredInstance.error
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getCommentsForPost: (postId) => dispatch(getCommentsForPost(postId)),
        allocateElementForCommentsBlockInState: (postId) => dispatch(allocateElementForCommentsBlockInState(postId))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(CommentList);