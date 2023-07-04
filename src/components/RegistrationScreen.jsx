import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import PhotoBG from "../picture/PhotoBG.png";
import add from "../picture/add.png";

export default RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={PhotoBG} style={styles.image}>
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <View style={styles.squareContainer}>
            <TouchableOpacity style={styles.buttonAdd}>
              <Image source={add} style={styles.addImage} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <TextInput
            style={styles.input}
            placeholder="Логін"
            placeholderTextColor="rgba(189, 189, 189, 1)"
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="rgba(189, 189, 189, 1)"
          ></TextInput>
          <View style={styles.viewLastImput}>
            <TextInput
              style={[styles.input, styles.inputLastMargin]}
              placeholder="Пароль"
              placeholderTextColor="rgba(189, 189, 189, 1)"
            ></TextInput>
            <TouchableOpacity style={styles.viewLastImputButton}>
              <Text style={styles.viewLastImputText}>Показати</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Зареєстуватися</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkLogIn}>
            <Text style={styles.textLogIn}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },

  squareContainer: {
    position: "absolute",
    backgroundColor: "rgba(246, 246, 246, 1)",
    width: 120,
    height: 120,
    borderRadius: 16,
    alignSelf: "center",
    top: -60,
  },

  buttonAdd: {
    position: "absolute",
    bottom: 14,
    right: -12,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  addImage: {
    width: 25,
    height: 25,
  },

  contentContainer: {
    position: "relative",
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 35,
    marginTop: 92,
    marginBottom: 32,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgba(232, 232, 232, 1)",
    backgroundColor: "rgba(246, 246, 246, 1)",
    paddingLeft: 16,
    marginBottom: 16,
  },

  inputLastMargin: {
    marginBottom: 43,
  },

  visibleButton: {
    height: 5,
    width: 20,
  },

  viewLastImput: {
    position: "relative",
  },

  viewLastImputButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },

  viewLastImputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(27, 67, 113, 1)",
  },

  registerButton: {
    backgroundColor: "rgba(255, 108, 0, 1)",
    borderRadius: 100,
    marginBottom: 16,
  },

  registerButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(255, 255, 255, 1)",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 111,
    paddingLeft: 111,
  },

  linkLogIn: {},

  textLogIn: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    color: "rgba(27, 67, 113, 1)",
  },
});
