import { Link } from "expo-router";
import { View } from "react-native";

const ExplorePage = () => {
  return (
    <View>
      <Link href="/(modals)/login">Login</Link>
      <Link href="/(modals)/booking">Bookings</Link>
      <Link href="/listing/1337">Listing details</Link>
    </View>
  );
};

export default ExplorePage;
