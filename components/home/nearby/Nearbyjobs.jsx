import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

import styles from "./nearbyjobs.style";
import {
  images,
  icons,
  COLORS,
  FONT,
  SIZES,
  SHADOWS
} from "../../../constants";
const Nearbyjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = true;
  return (
    <View>
      <Text>Nearbyjobs</Text>
    </View>
  );
};

export default Nearbyjobs;
