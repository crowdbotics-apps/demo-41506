import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Untitled3 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      
      <TextInput style={styles.VNRTMkpC} clearTextOnFocus={true} editable={true} placeholder="Username" placeholderTextColor="#ffffff" selectionColor="#090" autoFocus={true} inlineImageLeft="5"></TextInput>
      
      <View style={styles.myIvepPx}>
        <Pressable onPress={() => {
        navigation.navigate("Untitled4", {
          data: "data"
        });
      }}><Text style={styles.cAyDDYop}>{"SIGNUP"}</Text></Pressable>
      </View>
    <ImageBackground style={styles.auiSowuU} source={require("./croc-removebg-preview.png")} resizeMode="contain"></ImageBackground></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#134e17"
  },
  VNRTMkpC: {
    backgroundColor: "#090",
    borderColor: "#cccccc",
    width: 244,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    left: 64,
    top: 169,
    color: "#fefdfd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    padding: 10
  },
  myIvepPx: {
    width: 244,
    height: 40,
    backgroundColor: "#090",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 57,
    top: 498,
    borderColor: "#69cb24",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  cAyDDYop: {
    width: 97,
    height: 15,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    fontWeight: "400",
    textAlign: "center",
    position: "absolute",
    left: 73.5,
    top: 12.5,
    color: "#ffffff"
  },
  auiSowuU: {
    width: 166,
    height: 95,
    position: "absolute",
    left: 104,
    top: 28
  }
});
export default Untitled3;