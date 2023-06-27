import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.mVtsuNes}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  mVtsuNes: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 20,
    color: "#777777",
    position: "absolute",
    left: 103,
    top: 412
  }
});
export default Untitled4;