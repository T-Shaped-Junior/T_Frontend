import React from 'react';
import '../Style/Forum.scss';
import PostItem from './PostItem';

const Forum = ({ }) => {

    // const POSTINFO_DESC = [...postInfo].reverse();

    return (
        <div className='forum_wrap'>
            <div className='article_title_box'>
                <h1 className='article_title' style={{ color: '#E5EDF5' }}>
                    모든 제보
                </h1>
            </div>
            <div>
                {/* {POSTINFO_DESC && POSTINFO_DESC.map((post) => (
                    <PostItem
                        key={post.postId}
                        text={post.text}
                        id={post.postId}
                        date={post.postDate}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default Forum;