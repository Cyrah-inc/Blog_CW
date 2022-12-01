import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useState} from 'react'

const BlogPostForm = ({onSubmit, blogPost}) => {
    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)
    return (

        <View>
            <Text>Title</Text>
            <TextInput
              style={styles.txt}
              value={title}
              onChangeText={(text)=> setTitle(text)}
            />
            <Text>Content</Text>
            <TextInput
              style={styles.txt}
              value={content}
              onChangeText={(text)=> setContent(text)}
            />
            <Button
              title='Save Blog Post'
              onPress= {()=>{onSubmit(title, content)}}
            //   onPress={()=> {
            //     addBlogPost(title, content, () => {navigation.navigate('Index');})
            //   }}
            />
        </View>
      )
}

BlogPostForm.defaultProps={
  blogPost:{
    id:'',
    title:'',
    content:'',
  }
}

export default BlogPostForm

const styles = StyleSheet.create({
    txt: {
        marginVertical: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey' ,
      }
})