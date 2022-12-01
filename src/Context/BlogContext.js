import React, {useReducer} from "react";
const BlogContext = React.createContext();
const blogReducer = (state, action) => {
    // action.type == add_blogpost/ delete_blogpost
    switch(action.type){
        case 'add_blogpost':
            return [...state, {
                id: state.length+1,
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'delete_blogpost':
            return state.filter((item)=> {
                return item.id !== action.payload
            });
        default:
            return state;
    }
}
export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    const addBlogPost = (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}});
        callback();
    }
    const deleteBlogPost = (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
    // {{data: blogPosts, addBlogPost, deleteBlogPost}}
    return <BlogContext.Provider value={{data: blogPosts, addBlogPost, deleteBlogPost}}>{children}</BlogContext.Provider>
}
export default BlogContext;