import {
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import mainBG from "../../assets/mainBG.png";
import JoinText from "../../assets/JoinText.png";
import MenuText from "../../assets/MenuText.png";
import OrderText from "../../assets/OrderText.png";
import AccountText from "../../assets/AccountText.png";
import SpecialText from "../../assets/SpecialText.png";

import hanginglight from "../../assets/hanginglight.png";

import { Feather, Ionicons } from "@expo/vector-icons/";
import Menu from "./Menu";

const Home = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  return (
    <ImageBackground
      style={styles.screen}
      source={mainBG}
      imageStyle={{
        objectFit: "cover",
        width: "102%",
        height: "100%",
        top: -20,
      }}
    >
      <View style={styles.overlay}></View>

      <View style={styles.hero}>
        <View style={styles.registerCard}>
          <Image
            style={{
              width: 90,
              height: 200,
              position: "absolute",
              top: 0,
              right: 0,
              borderRadius: 23,
            }}
            source={hanginglight}
          />
          <Image source={JoinText} style={{ width: 150, height: 70 }} />

          <Text style={styles.subText}> Get discounts and free delivery</Text>
          <TouchableOpacity style={styles.buttonOption}>
            <Text style={[styles.optionText, { fontSize: 12 }]}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={[styles.optionText, { color: "#946526" }]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.modalNav}>
        <TouchableOpacity
          style={[styles.navButton, { borderRightColor: "#946526" }]}
          onPress={() => {
            setModal(true);
            setModalType("menu");
          }}
        >
          <Image source={MenuText} style={{ width: 50, height: 22 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { borderRightColor: "#853804" }]}
          onPress={() => {
            setModal(true);
            setModalType("specials");
          }}
        >
          <Image source={SpecialText} style={{ width: 70, height: 22 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { borderRightColor: "#853804" }]}
          onPress={() => {
            setModal(true);
            setModalType("orders");
          }}
        >
          <Image source={OrderText} style={{ width: 60, height: 22 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.navButton, { borderRightColor: "#853804" }]}
          onPress={() => {
            setModal(true);
            setModalType("account");
          }}
        >
          <Image source={AccountText} style={{ width: 65, height: 22 }} />
        </TouchableOpacity>
      </View>
      {modal && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modal}
          onRequestClose={() => setModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={{ flex: 1, width: "100%" }}>
              {modalType === "menu" && (
                <View style={{ flex: 1, width: "100%" }}>
                  <Menu setModal={setModal} />
                  {/* Menu items */}
                </View>
              )}
              {modalType === "specials" && (
                <View style={{ flex: 1, width: "100%" }}>
                  <Text style={styles.modalTitle}>Specials</Text>
                  {/* Specials items */}
                </View>
              )}
              {modalType === "orders" && (
                <View style={{ flex: 1, width: "100%" }}>
                  <Text style={styles.modalTitle}>Orders</Text>
                  {/* Order history */}
                </View>
              )}
              {modalType === "account" && (
                <View style={{ flex: 1, width: "100%" }}>
                  <Text style={styles.modalTitle}>Account</Text>
                  {/* Account details */}
                </View>
              )}
            </View>
          </View>
        </Modal>
      )}
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#e8e3dc",
    paddingTop: 60,
    justifyContent: "space-between",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    marginBottom: 10,
    gap: 50,
    paddingHorizontal: 20,
  },
  buttonOption: {
    backgroundColor: "#946526",
    padding: 9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    maxHeight: 35,
    width: 130,
  },
  buttonSecondary: {
    borderColor: "#946526",
    borderWidth: 2,
    maxHeight: 35,
    padding: 7,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 10,
    height: 40,
  },
  optionText: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
  },
  modalNav: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    borderRadius: 23,
    padding: 30,
    paddingVertical: 40,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  navText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    fontWeight: "bold",
    color: "#853804",
    textAlignVertical: "center", // Centers the text vertically within the stretched area (Android only)
    textAlign: "center",
  },
  hero: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  registerCard: {
    width: "90%",
    height: 300,
    // backgroundColor: "rgba(200, 100, 30, 0.6)",
    backgroundColor: "#rgba(255, 255,255,1)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    width: "80%",
    textAlign: "center",
    color: "#853804",
  },
  subText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    width: "60%",
    textAlign: "center",
    color: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    paddingVertical: 60,
    alignItems: "center",
  },
});
