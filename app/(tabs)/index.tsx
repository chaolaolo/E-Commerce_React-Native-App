import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1,}}>
      <Link href={"/notifications"}>Feed screen in tabs</Link>
    </View>
  );
}


