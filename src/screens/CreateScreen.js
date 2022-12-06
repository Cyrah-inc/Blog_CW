import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import BlogContext from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(BlogContext)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //const blogPost= {id:1000, title:'random', content:'random'}

  return <BlogPostForm 
 // blogPost={blogPost}
  onSubmit ={(title, content)=>{addBlogPost (title, content, () => {navigation.navigate('Index')}   )
  
    
  }}/>
  // return (
  //   <View>
  //       <Text>Title</Text>
  //       <TextInput
  //         style={styles.txt}
  //         value={title}
  //         onChangeText={(text)=> setTitle(text)}
  //       />
  //       <Text>Content</Text>
  //       <TextInput
  //         style={styles.txt}
  //         value={content}
  //         onChangeText={(text)=> setContent(text)}
  //       />
  //       <Button
  //         title='Add Blog Post'
  //         onPress={()=> {
  //           addBlogPost(title, content, () => {navigation.navigate('Index');})
  //         }}
  //       />
  //   </View>
  // )
}
const styles = StyleSheet.create({
  txt: {
    marginVertical: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey' ,
  }
})

export default CreateScreen











