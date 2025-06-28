import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { db } from "../../firebase/config";

export default function StationMasterScreen() {
  const currentStationId = "abanpola_station"; // Change this per user
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where("toStationId", "==", currentStationId),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📨 Station Master Inbox</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.from}>From: {item.fromStationId}</Text>
            <Text style={styles.text}>📩 {item.message}</Text>
            <Text style={styles.time}>
              {item.timestamp?.toDate()?.toLocaleString() || "Sending..."}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  messageBox: {
    padding: 15, marginBottom: 10, borderRadius: 10, backgroundColor: "#f1f1f1",
  },
  from: { fontWeight: "bold" },
  text: { marginTop: 4 },
  time: { fontSize: 12, marginTop: 6, color: "#666" },
});
