import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../Context/BlogContext";
const ShowScreen = ({ route }) => {
  const { data } = useContext(BlogContext);
  const id = route.params.id;
  const blogPost = data.find((post) => {
    return post.id === id;
  });

  return (
    <ScrollView>
      <Text style={styles.txt}>{blogPost.title}</Text>
     {/** {blogPost.image!==null? <Image source={{uri: blogPost.image}} style={styles.img}/> :null} */} 
     {blogPost.image ? <Image source={{uri: blogPost.image}} style={styles.img}/> :null}
     
      
      
      <Text style ={ styles.txt1}>{blogPost.content}</Text>
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  txt:{
    fontSize: 25,
    alignSelf: 'center'
  },
  txt1:{
    fontSize: 18,
    justifyContent: 'flex-start',
    margin:10
  },
  img:{
    width:300,
    height:300,
    borderRadius:5,
    margin:5,
    borderWidth: 1,
    alignSelf:'center',
    aspectRatio: 0.75,
},
});

export default ShowScreen;
