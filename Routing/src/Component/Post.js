import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3>React</h3>
                <Link to="/post/React?page_no=1">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node?page_no=2">Details</Link>
                <h3>JavaScript</h3>
                <Link to="/post/JavaScript?page_no=3">Details</Link>
            </div>
            
        </div>
    )
}

export default Post;