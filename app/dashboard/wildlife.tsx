// app/dashboard/wildlife.tsx
import { Button, Text, View } from "react-native";

export default function WildlifeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>🐘 Welcome, Wildlife Department</Text>
      <Button title="Get Past Collision Details" onPress={() => {}} />
    </View>
  );
}
