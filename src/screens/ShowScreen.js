import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../Context/BlogContext";
const ShowScreen = ({ route }) => {
  const { data } = useContext(BlogContext);
  const id = route.params.id;
  const blogPost = data.find((post) => {
    return post.id === id;
  });

  return (
    <View>
      <Text style={styles.txt}>{blogPost.title}</Text>
      <Text style ={ styles.txt1}>{blogPost.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txt:{
    fontSize: 16,
    alignSelf: 'center'
  },
  txt1:{
    fontSize: 16,
    justifyContent: 'flex-start',
    margin:10
  }
});

export default ShowScreen;
