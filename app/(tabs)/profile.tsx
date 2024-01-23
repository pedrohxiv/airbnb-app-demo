import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const ProfilePage = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Logout" onPress={() => signOut()} />
      {!isSignedIn && (
        <Link href="/(modals)/login">
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default ProfilePage;
