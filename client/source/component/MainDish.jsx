import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import mainDish from "../../assets/mainDish.png";
import BuildThali from "../../assets/BuildThali.png";
import mainOption1 from "../../assets/mainOption1.png";
import mainOption2 from "../../assets/mainOption2.png";
import mainRice from "../../assets/mainRice.png";
import mainRoti from "../../assets/mainRoti.png";
import { Ionicons } from "@expo/vector-icons";

const MainDish = () => {
  const [selectedItems, setSelectedItems] = useState({
    option1: null,
    option2: null,
    riceOrRoti: null,
    dessert: null,
  });

  const handleSelectItem = (category, item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: prevSelectedItems[category] === item ? null : item,
    }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="bag-outline" size={24} color="#853804" />
      </TouchableOpacity>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <View style={styles.header}>
          <Image source={mainDish} style={styles.image} />
          <Image source={BuildThali} style={styles.imageText} />
        </View>
        <Text style={styles.resultText}>
          Thali comes with a dry veg, a curry, roti or rice and a dessert
        </Text>
        <View
          style={{
            backgroundColor: "lightgrey",
            width: 70,
            justifyContent: "center",
            alignItems: "center",
            height: 30,
            borderRadius: 20,
            marginTop: 10,
            alignSelf: "flex-end",
          }}
        >
          <Text
            style={[styles.resultText, { color: "white", fontWeight: "bold" }]}
          >
            $15.99
          </Text>
        </View>

        <Text style={styles.sectionText}>Main Option 1</Text>
        <View style={styles.divider}></View>
        <View style={styles.section}>
          <View style={[styles.subSection]}>
            <Image source={mainOption1} style={styles.item} />
          </View>
          <View style={styles.subSection}>
            <Text style={styles.itemName}>Channa Masala</Text>
          </View>
          <View style={styles.subSection}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor:
                    selectedItems.option1 === "Channa Masala"
                      ? "#7ed957"
                      : undefined,
                },
              ]}
              onPress={() => handleSelectItem("option1", "Channa Masala")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionText}>Main Option 2</Text>
        <View style={styles.divider}></View>
        <View style={styles.section}>
          <View style={[styles.subSection]}>
            <Image
              source={mainOption2}
              style={[styles.item, { height: 180 }]}
            />
          </View>
          <View style={styles.subSection}>
            <Text style={styles.itemName}>Mixed Veg</Text>
          </View>
          <View style={styles.subSection}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor:
                    selectedItems.option2 === "Mixed Veg"
                      ? "#7ed957"
                      : undefined,
                },
              ]}
              onPress={() => handleSelectItem("option2", "Mixed Veg")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionText}>Rice or Roti</Text>
        <View style={styles.divider}></View>
        <View style={styles.section}>
          <View style={[styles.subSection]}>
            <Image source={mainRice} style={styles.item} />
          </View>
          <View style={styles.subSection}>
            <Text style={styles.itemName}>Rice</Text>
          </View>
          <View style={styles.subSection}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor:
                    selectedItems.riceOrRoti === "Rice" ? "#7ed957" : undefined,
                },
              ]}
              onPress={() => handleSelectItem("riceOrRoti", "Rice")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={[styles.subSection]}>
            <Image source={mainRoti} style={styles.item} />
          </View>
          <View style={styles.subSection}>
            <Text style={styles.itemName}>Roti</Text>
          </View>
          <View style={styles.subSection}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor:
                    selectedItems.riceOrRoti === "Roti" ? "#7ed957" : undefined,
                },
              ]}
              onPress={() => handleSelectItem("riceOrRoti", "Roti")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionText}>Dessert</Text>
        <View style={styles.divider}></View>
        <View style={[styles.section, { marginBottom: 60 }]}>
          <View style={[styles.subSection]}>
            <Image
              source={{
                uri: "https://i.pinimg.com/564x/15/9d/1f/159d1fc63538b5e0e82148235b05b8e4.jpg",
              }}
              style={styles.item}
            />
          </View>
          <View style={styles.subSection}>
            <Text style={styles.itemName}>Ladoo</Text>
          </View>
          <View style={styles.subSection}>
            <TouchableOpacity
              style={[
                styles.selectButton,
                {
                  backgroundColor:
                    selectedItems.dessert === "Ladoo" ? "#7ed957" : undefined,
                },
              ]}
              onPress={() => handleSelectItem("dessert", "Ladoo")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.resultText}>
          Thali with {Object.values(selectedItems).filter(Boolean).join(", ")}
        </Text>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainDish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    position: "absolute",
    top: -25,
    right: 0,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    objectFit: "contain",
  },
  imageText: {
    width: 160,
    height: 40,
    objectFit: "contain",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  sectionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#853804",
    marginTop: 20,
    marginBottom: 4,
  },
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#853804",
    marginVertical: 5,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
    gap: 10,
    marginTop: 10,
  },
  item: {
    width: 200,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#853804",
  },
  subSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#853804",
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  resultText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#853804",
  },
  footer: {
    position: "absolute",
    bottom: -30,
    left: 0,
    right: 0,
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
