import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Landing = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.igElApFU} source={require("./croc-removebg-preview.png")} resizeMode="contain"></ImageBackground>
      
    <Pressable onPress={() => {
      navigation.navigate("Untitled3");
    }}><View style={styles.iUsyULGp}><Text style={styles.waFdcGFK}>{"GET START"}</Text></View></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#134e17"
  },
  igElApFU: {
    width: 163,
    height: 194,
    position: "absolute",
    left: 96.5,
    top: 190
  },
  iUsyULGp: {
    height: 40,
    width: 200,
    backgroundColor: "#090",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 78,
    top: 486
  },
  waFdcGFK: {
    width: 100,
    height: 23,
    lineHeight: 14,
    fontSize: 16,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: 50,
    top: 8.5,
    color: "#fcfcfc"
  }
});
export default Landing;