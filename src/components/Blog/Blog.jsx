import React, { Component } from 'react';
import LeftColumn from './LeftColumn/LeftColumn.jsx';
import BlogContent from './BlogContent/BlogContent.jsx';

class Blog extends Component {
    render() {
        return (
           <div className="blog">
            <LeftColumn/>
            <BlogContent/>  
            </div> 
        );
    }
}

export default Blog;