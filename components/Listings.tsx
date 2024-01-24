import { useEffect } from "react";
import { Text, View } from "react-native";

interface ListingsProps {
  listings: any[];
  category: string;
}

export const Listings = ({ listings, category }: ListingsProps) => {
  useEffect(() => {}, [category]);

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};
