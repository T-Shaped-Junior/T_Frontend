import React from 'react';
import ForumItem from './ForumItem.js';

const Forum = ({ images, items }) => {

    return (
        <div>
            {
                items.map((item) => (
                    <ForumItem
                        key={item.id}
                        text={item.text}
                        name={item.name}
                        date={item.date}
                        profileImg={item.profileImg}
                        contentImg={item.contentImg}
                        images={images}
                    />
                ))
            }
        </div>
    );
};


export default Forum;
