import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Listings } from "@/components/Listings";
import { dark, grey } from "@/constants/colors";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";

interface ListingsBottomSheetProps {
  listings: Listing[];
  category: string;
}

export const ListingsBottomSheet = ({
  listings,
  category,
}: ListingsBottomSheetProps) => {
  const [refresh, setRefresh] = useState(0);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["10%", "100%"], []);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      style={styles.sheetContainer}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: grey }}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
            <Text style={{ fontFamily: "mon-sb", color: "#FFF" }}>Map</Text>
            <Ionicons name="map" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: dark,
    padding: 16,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetContainer: {
    borderStartColor: "#FFF",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
