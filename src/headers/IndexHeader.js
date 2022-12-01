import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const IndexHeader = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Ionicons name="add-sharp" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
export default IndexHeader;
 