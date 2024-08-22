import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import sideDish from "../../assets/sideDish.png";
import mainDish from "../../assets/mainDish.png";
import mainDishText from "../../assets/mainDishText.png";
import sideDishText from "../../assets/sideDishText.png";
import RotiText from "../../assets/RotiText.png";
import DessertText from "../../assets/DessertText.png";
import { Feather, Ionicons } from "@expo/vector-icons/";
import MainDish from "../component/MainDish";
import SideDish from "../component/SideDish";
import Roti from "../component/Roti";
import Dessert from "../component/Dessert";

const Menu = ({ setModal }) => {
  const [modals, setModals] = useState(false);
  const [modalType, setModalType] = useState("");
  return (
    <View style={{ flex: 1, width: "100%" }}>
      {!modals ? (
        <>
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setModal(false)}
          >
            <Ionicons name="chevron-down" size={30} color="#853804" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setModals(true);
              setModalType("main");
            }}
          >
            <Image
              source={mainDish}
              style={{ width: 150, height: 150, objectFit: "contain", flex: 1 }}
            />
            <Image source={mainDishText} style={{ width: 90, height: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setModals(true);
              setModalType("side");
            }}
          >
            <Image
              source={sideDish}
              style={{ width: 150, height: 150, objectFit: "contain", flex: 1 }}
            />
            <Image source={sideDishText} style={{ width: 90, height: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setModals(true);
              setModalType("rice");
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/b5/92/64/b592647caf136980e93da06337d307aa.jpg",
              }}
              style={{ width: 150, height: 150, objectFit: "contain", flex: 1 }}
            />
            <Image source={RotiText} style={{ width: 90, height: 22 }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setModals(true);
              setModalType("dessert");
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/15/9d/1f/159d1fc63538b5e0e82148235b05b8e4.jpg",
              }}
              style={{ width: 150, height: 150, objectFit: "contain", flex: 1 }}
            />
            <Image source={DessertText} style={{ width: 90, height: 22 }} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          {modalType === "main" ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModals(false);
                  setModalType("");
                }}
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Ionicons name="chevron-back" size={20} color="#853804" />
                <Text
                  style={{ color: "#853804", fontWeight: "600", fontSize: 20 }}
                >
                  Main menu
                </Text>
              </TouchableOpacity>
              <MainDish />
            </>
          ) : modalType === "side" ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModals(false);
                  setModalType("");
                }}
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Ionicons name="chevron-back" size={20} color="#853804" />
                <Text
                  style={{ color: "#853804", fontWeight: "600", fontSize: 20 }}
                >
                  Main menu
                </Text>
              </TouchableOpacity>
              <SideDish />
            </>
          ) : modalType === "rice" ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModals(false);
                  setModalType("");
                }}
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Ionicons name="chevron-back" size={20} color="#853804" />
                <Text
                  style={{ color: "#853804", fontWeight: "600", fontSize: 20 }}
                >
                  Main menu
                </Text>
              </TouchableOpacity>
              <Roti />
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  setModals(false);
                  setModalType("");
                }}
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Ionicons name="chevron-back" size={20} color="#853804" />
                <Text
                  style={{ color: "#853804", fontWeight: "600", fontSize: 20 }}
                >
                  Main menu
                </Text>
              </TouchableOpacity>
              <Dessert />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  option: {
    width: "70%",
    padding: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8d3400",
    textAlignVertical: "center", // Centers the text vertically within the stretched area (Android only)
  },
});
