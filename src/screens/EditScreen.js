import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import BlogPostForm from '../Components/BlogPostForm'
import BlogContext from '../Context/BlogContext'

const EditScreen = ({route, navigation}) => {

  const id  = route.params.id;
  const {data, editBlogPost} = useContext(BlogContext)

  const blogPost = data.find((post)=>post.id === id)
  //console.log(id);
  return <BlogPostForm blogPost={blogPost}
  onSubmit={(title, content)=>{editBlogPost(id, title, content, () => {navigation.pop()} )} }
  // , () => {navigation.pop()}
  />
}

export default EditScreen

const styles = StyleSheet.create({})