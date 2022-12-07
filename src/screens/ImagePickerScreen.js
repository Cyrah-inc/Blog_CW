import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'

const ImagePickerScreen = () => {
    const [image, setImage]=useState(null)
    const pickImage = async ()=>{
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
    <View style={styles.container}>
      <Text style={styles.txt}>My Image Screen</Text>
      
      {image!==null? <Image source={{uri: image}} style={styles.img}/> :null}

      <Button
      title='Pick Image'
      onPress={pickImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:300,
        height:300,
        aspectRatio: 0.75,
        borderRadius:5,
        margin:5,
        borderWidth: 1,
        
    },
    container:{
      alignItems:'center',
      margin: 5,
      padding: 10

    },
    txt:{
      fontSize:20
    }
});

export default ImagePickerScreen
