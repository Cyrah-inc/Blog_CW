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
        case 'edit_blogpost':
            //find a blogPost with the same id from state
            //replace it with title and content we've gotten
            console.log(action.payload)
            return state.map((item)=>{
                // if ( item .id === action.payload.id){
                //     return action.payload
                // }else{
                //     return state
                // }
                return item.id===action.payload.id ? action.payload : item;
            })
            

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
    const editBlogPost =(id, title, content, callback)=>{
        dispatch({type: 'edit_blogpost', payload:{id, title, content}})
        callback();
    }
    const deleteBlogPost = (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
    // {{data: blogPosts, addBlogPost, deleteBlogPost}}
    return <BlogContext.Provider value={{data: blogPosts, addBlogPost, editBlogPost,deleteBlogPost}}>{children}</BlogContext.Provider>
}
export default BlogContext;