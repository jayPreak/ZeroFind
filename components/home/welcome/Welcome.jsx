import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

import {
  images,
  icons,
  COLORS,
  FONT,
  SIZES,
  SHADOWS
} from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Jayesh</Text>
        <Text style={styles.welcomeMessage}>Find the perfect job!</Text>
      </View>
    </View>
  );
};

export default Welcome;
