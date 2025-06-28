import { useLocalSearchParams, useRouter } from "expo-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { db } from "../../firebase/config";

export default function DriverMessageScreen() {
  const router = useRouter();
  const { currentStationId, nextStationId, stationName } = useLocalSearchParams();
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) {
      Alert.alert("Please enter a message");
      return;
    }

    await addDoc(collection(db, "messages"), {
      fromStationId: currentStationId,
      toStationId: nextStationId,
      message: message.trim(),
      timestamp: serverTimestamp(),
    });

    Alert.alert("Message Sent", "Successfully sent to next station.");
    setMessage("");
    router.back(); // Go back to previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Message from {stationName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />
      <Button title="📤 Send Message" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 20 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 8,
    minHeight: 100,
    textAlignVertical: "top",
  },
});
