import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import mainRoti from "../../assets/mainRoti.png";
import ChooseCarb from "../../assets/ChooseCarb.png";
import mainRice from "../../assets/mainRice.png";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const Roti = () => {
  const [selectedItems, setSelectedItems] = useState({
    side: null,
    side2: null,
  });
  const [selectedItemAmount, setSelectedItemAmount] = useState({
    side: 0,
    side2: 0,
  });

  const handleSelectItem = (category, item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: prevSelectedItems[category] === item ? null : item,
    }));

    if (selectedItems[category] !== item) {
      setSelectedItemAmount((prevAmounts) => ({
        ...prevAmounts,
        [category]: "1", // Set default amount to 1
      }));
    }
  };

  const handleAmountChange = (category, value) => {
    setSelectedItemAmount((prevAmounts) => ({
      ...prevAmounts,
      [category]: value,
    }));
  };

  const handleNextPress = () => {
    const invalidSelections = Object.entries(selectedItems).filter(
      ([key, value]) =>
        value && (!selectedItemAmount[key] || selectedItemAmount[key] === "0")
    );

    if (invalidSelections.length > 0) {
      alert("Please ensure all selected items have a valid amount.");
    } else {
      // Proceed to the next step
      console.log(
        "Proceeding with selections:",
        selectedItems,
        selectedItemAmount
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="bag-outline" size={24} color="#853804" />
      </TouchableOpacity>
      <ScrollView style={{ width: "100%", flex: 1 }}>
        <View style={styles.header}>
          <Image source={mainRoti} style={[styles.image, { height: 120 }]} />
          <Image source={ChooseCarb} style={styles.imageText} />
        </View>
        <Text style={styles.resultText}>Choose your selection of carbs</Text>
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
            $0.99
          </Text>
        </View>
        <Text style={styles.sectionText}>Side Options</Text>
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
                    selectedItems.side === "Roti" ? "#7ed957" : undefined,
                },
              ]}
              onPress={() => handleSelectItem("side", "Roti")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {selectedItems.side === "Roti" && (
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => handleAmountChange("side", value)}
              items={[
                { label: "1 Serving", value: "1" },
                { label: "2 Servings", value: "2" },
                { label: "3 Servings", value: "3" },
              ]}
              placeholder={{ label: "Select Amount", value: null }}
              style={pickerSelectStyles}
              value={selectedItemAmount.side}
            />
          </View>
        )}

        <View style={styles.section}>
          <View style={[styles.subSection]}>
            <Image source={mainRoti} style={[styles.item, { height: 120 }]} />
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
                    selectedItems.side2 === "Rice" ? "#7ed957" : undefined,
                },
              ]}
              onPress={() => handleSelectItem("side2", "Rice")}
            >
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {selectedItems.side2 === "Rice" && (
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              onValueChange={(value) => handleAmountChange("side2", value)}
              items={[
                { label: "1 Serving", value: "2" },
                { label: "2 Servings", value: "4" },
                { label: "3 Servings", value: "6" },
                { label: "4 Servings", value: "8" },
                { label: "5 Servings", value: "10" },
                { label: "6 Servings", value: "12" },
                { label: "7 Servings", value: "14" },
                { label: "8 Servings", value: "16" },
                { label: "9 Servings", value: "18" },
                { label: "10 Servings", value: "20" },
              ]}
              placeholder={{ label: "Select Amount", value: null }}
              style={pickerSelectStyles}
              value={selectedItemAmount.side2}
            />
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.resultText}>
          Selected:{" "}
          {Object.entries(selectedItems)
            .map(([key, value]) =>
              value
                ? `${value === undefined ? 0 : value} (${
                    selectedItemAmount[key]
                  }X)`
                : null
            )
            .filter(Boolean)
            .join(", ")}
        </Text>
        <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Roti;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginTop: 10,
    color: "grey",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginTop: 10,
    color: "grey",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
});

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
    resizeMode: "contain",
  },
  imageText: {
    width: 170,
    height: 40,
    resizeMode: "contain",
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
    marginTop: 20,
  },
  item: {
    width: 200,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
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
  pickerContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
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
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
