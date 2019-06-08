import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getCommentsForPost } from './commentListActions.jsx';

class CommentList extends React.Component {
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
    return {
        postId: ownProps.postId,
        isFilled: state.commentListReducer.isFilled,
        commentsInfo: state.commentListReducer.commentsInfo,
        error: state.commentListReducer.error
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getCommentsForPost: (postId) => dispatch(getCommentsForPost(postId))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(CommentList);