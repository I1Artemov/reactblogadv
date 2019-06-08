import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getPosts } from './blogActions.jsx';
import CommentList from '../CommentList/commentList.jsx';

class Blog extends React.Component {

    componentDidMount() {
        this.props.getPosts(0);
    }

    render() {
        let posts = this.props.postsInfo.map(item => {
            return (
                <div key={item.id} className="post">
                    <div>№{item.id}, {item.creationDateTime}</div>
                    <div className="header">{item.header}</div>
                    <div className="content">{item.body}</div>
                    <CommentList key={item.id} postId={item.id}/>
                    <hr />
                </div>
            );
        });

        return (
            <div id="blog">
                {posts}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        postsInfo: state.blogReducer.postsAndPagingInfo.modelsList,
        pagingInfo: state.blogReducer.postsAndPagingInfo.pagingInfo,
        error: state.blogReducer.error
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getPosts: (pageNumber, tag) => dispatch(getPosts(pageNumber, tag))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(Blog);