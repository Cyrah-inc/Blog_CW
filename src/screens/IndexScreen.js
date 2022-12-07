import {StyleSheet, Text, View, FlatList,TouchableOpacity,Image} from "react-native";
import React, { useContext, useEffect } from "react";
import BlogContext from "../Context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
// import { Card,  Button , Title ,Paragraph  } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const IndexScreen = ({ navigation }) => {
  const { data, addblogPost, deleteBlogPost, getBlogPost } = useContext(BlogContext);
  
  useEffect(()=>{
    getBlogPost()
    const listener = navigation.addListener('focus', ()=>{getBlogPost()})

    // return ()=>{
    //   console.log('component deleted')
    //   listener.remove()
    // };
  }, [] );

  // const {number, year} = useContext(BlogContext) 
  return (
    <View>
      <Text style={styles.txt2}> My Blog  </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={()=> navigation.navigate("Show", { id: item.id })}>
            <Card style={styles.cont}>
              <Card.Content>
                <Title style={styles.txt}>{item.title}</Title>
                <Card.Cover source={{ uri: item.image }} style={styles.img} />
                <Text numberOfLines={2}>{item.content}</Text>
              </Card.Content>
              
              <Card.Actions>
                  <Button onPress={() => {deleteBlogPost(item.id);}}>
                    Delete 
                    <AntDesign
                            name="delete"
                            size={24}
                            color="black"
                            style={styles.icon}
                          />
                  </Button>
                 
                  
                </Card.Actions>
            </Card>
            </TouchableOpacity>
          )
        }}
      />
      {/* <Text>{number}, {year}</Text> */}
      {/* <Button title="Create BlogPost" onPress={addblogPost} /> */}

      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            
            <Card style={styles.cont2}>
               <Card.Header>
                    <Title>{item.title}</Title>
                </Card.Header>
                <Card.Cover source={{uri: item.image}}/>
                <Card.Content>
                <Text>{item.content}</Text>
                </Card.Content>
                <Card.Content extra>
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
                </Card.Content>
            </Card>

          );
        }}
      /> */}
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
    cont: {
      margin:5,
      padding:10
    },
  txt: {
    fontSize: 20,
    alignSelf:'flex-start',
    
  },
  txt2: {
    fontSize: 20,
    alignSelf:'center',
    fontWeight:'bold'
    
  },
  img:{
    resizeMode: 'contain',
  },
  
});

export default IndexScreen;
