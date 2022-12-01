import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const EditHeader = ({navigation, route}) => {

  const id = route.params.id;
  
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Edit", {id});
      }}
    >
      <MaterialCommunityIcons name="lead-pencil" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default EditHeader;
