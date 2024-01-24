import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { grey } from "@/constants/colors";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

interface ExploreHeaderProps {
  onCategoryChanged: (category: string) => void;
}

export const ExploreHeader = ({ onCategoryChanged }: ExploreHeaderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoriesRef = useRef<Array<TouchableOpacity | null>>([]);
  const scrollRef = useRef<ScrollView>(null);

  const selectCategory = (index: number) => {
    const selected = categoriesRef.current[index];

    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href="/(modals)/booking" asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "mon-sb" }}>Where to</Text>
                <Text style={{ fontFamily: "mon", color: grey }}>
                  Anywhere - Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 16,
          }}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              onPress={() => selectCategory(index)}
              key={index}
              ref={(e) => (categoriesRef.current[index] = e)}
              style={
                activeIndex === index
                  ? styles.categoryBtnActive
                  : styles.categoryBtn
              }
            >
              <MaterialIcons
                size={24}
                name={category.icon as any}
                color={activeIndex === index ? "#000" : grey}
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 130,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: grey,
    borderRadius: 24,
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#C2C2C2",
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    backgroundColor: "#FFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: "#000",
  },
  categoryBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoryBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
