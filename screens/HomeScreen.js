import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const succeedAlert = () => {
    Alert.alert("Hello: ", "You've logged in successfully!");
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        <TouchableOpacity onPress={succeedAlert}>
          <Image
            source={require("../assets/Fanshawe_College_Logo_vecotrized.svg.png")}
            style={{ width: 185, height: 149 }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Welcome to Fanshawe Online</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },

  button: {
    backgroundColor: "orange",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
