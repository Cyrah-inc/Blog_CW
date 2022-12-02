import {StyleSheet, Text, Button, View, FlatList,TouchableOpacity,} from "react-native";
import React, { useContext, useEffect } from "react";
import BlogContext from "../Context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { data, addblogPost, deleteBlogPost, getBlogPost } = useContext(BlogContext);
  
  useEffect(()=>{getBlogPost();}, [] )

  // const {number, year} = useContext(BlogContext)
  return (
    <View>
      <Text>IndexScreen</Text>
      {/* <Text>{number}, {year}</Text> */}
      {/* <Button title="Create BlogPost" onPress={addblogPost} /> */}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={()=> navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.cont2}>
                <Text style={styles.text}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <AntDesign
                    name="delete"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  cont2: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomWidth: 3,
    borderBottomColor: "green",
  },
  //   cont: {
  //     flex: 1,
  //     borderBottomColor: "green",
  //     borderWidth: 3,
  //     paddingBottom: 2,
  //   },
  text: {
    fontSize: 20,
  },
  //   icon: {
  //     alignSelf: "flex-end",
  //     size:10,
  //   },
});

export default IndexScreen;
