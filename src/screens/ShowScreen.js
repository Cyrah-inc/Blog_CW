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
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ShowScreen;
