import { ImageBackground } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ImageBackground style={styles.mjndFdHf} source={require("./croc-removebg-preview.png")} resizeMode="contain"></ImageBackground>
      <TextInput style={styles.VNRTMkpC} clearTextOnFocus={true} editable={true} placeholder="Username" placeholderTextColor="#ffffff" selectionColor="#090" autoFocus={true} inlineImageLeft="5"></TextInput>
      <TextInput style={styles.VNRTMkp} clearTextOnFocus={true} editable={true} placeholder="Password" placeholderTextColor="#ffffff" selectionColor="#090" autoFocus={true}></TextInput>
      <View style={styles.myIvepPx}>
        <Text style={styles.cAyDDYop}>{"LOGIN"}</Text>
      </View>
    </SafeAreaView>;
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
    left: 56,
    top: 332,
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
  VNRTMkp: {
    backgroundColor: "#090",
    borderColor: "#cccccc",
    width: 244,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    left: 56,
    top: 400,
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
  mjndFdHf: {
    width: 163,
    height: 194,
    position: "absolute",
    left: 95,
    top: 80
  },
  myIvepPx: {
    width: 244,
    height: 40,
    backgroundColor: "#090",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 56,
    top: 482,
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
  }
});
export default Untitled3;