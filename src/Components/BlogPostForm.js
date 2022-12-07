import { StyleSheet, Text, View, TextInput, Button,Image } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import ImagePickerScreen from '../screens/ImagePickerScreen'

const BlogPostForm = ({onSubmit, blogPost}) => {
    const [title, setTitle] = useState(blogPost.title)
    const [content, setContent] = useState(blogPost.content)
    const [image, setImage]=useState(null)
    const pickImage = async()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect:[3,4],
        quality: 1,
      });
      //console.log(result);
      if(!result.canceled){
          setImage(result.assets[0].uri)
          //setImage({uri: result.assets[0].uri})
          console.log(typeof result.assets[0].uri);
      }
    }
    return (

        <View >
            <Text>Title</Text>

            {image!==null? <Image source={{uri: image}} style={styles.img}/> :null}

            <View style={styles.container}>
              <Button title='Pick Image' onPress={pickImage} style ={styles.btn}/>
              </View>

            
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
           <View style={styles.container}>
           <Button style ={styles.btn} title='Save Blog Post'
             onPress= {()=>{onSubmit(title, content,image)}}
            //   onPress={()=> {
            //     addBlogPost(title, content, () => {navigation.navigate('Index');})
            //   }}
            />
           </View>

            
        </View>
      )
}

BlogPostForm.defaultProps={
  blogPost:{
    id:'',
    title:'',
    content:'',
    image: '',
  }, 
  
}

export default BlogPostForm

const styles = StyleSheet.create({
    txt: {
        marginVertical: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey' ,
      },
      img:{
        width:300,
        height:300,
        aspectRatio: 0.75,
        borderRadius:5,
        margin:5,
        borderWidth: 1,
        alignSelf:'center',
    },
    container:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    
})