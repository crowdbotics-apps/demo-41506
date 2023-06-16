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
    }}>
        <View style={styles.myIvepPx}>
          <Text style={styles.cAyDDYop}>{"LET'S START"}</Text>
        </View>
      </Pressable>
    </SafeAreaView>;
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
  myIvepPx: {
    height: 40,
    width: 200,
    backgroundColor: "#090",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 78,
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
    left: 51.5,
    top: 12.5,
    color: "#ffffff"
  }
});
export default Landing;