import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1,backgroundColor:"black" }} >
        <Stack screenOptions={{ headerShown:false }}/>
          {/* <Stack.Screen name="index" options={{ headerTitle: "Feed" }} />
          <Stack.Screen name="profile" options={{ headerTitle: "Profile" }} />
          <Stack.Screen name="notifications" options={{ headerTitle: "Notifications",headerShown:false }} /> */}
        {/* </Stack> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
