import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import BlogContext from '../Context/BlogContext';

const BaseCode = () => {
    const {number, year, array} = useContext(BlogContext);
  return (
    <View>
      <Text>hey</Text>
      {/* <Text>The age is {number} and the years is {year}.</Text>
      <Text>The array of items is : {array}</Text> */}
    </View>
  )
}
const styles = StyleSheet.create({})

export default BaseCode;
