import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

export default function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  //console.log(basketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#cb202d] p-4 rounded-lg flex-row"
      >
        <Text className="text-white font-extrabold text-lg bg-[#74161e] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center mt-1">
          View Basket
        </Text>
        <Text className="text-ld text-white font-extrabold mt-2">
          <Text>₹{basketTotal}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
