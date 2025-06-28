import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";
import { db } from "../../firebase/config";

export default function DriverScreen() {
  const [station, setStation] = useState<any>(null);
  const currentStationId = "galgamuwa_station";
  const router = useRouter();

  useEffect(() => {
    const fetchStation = async () => {
      const snap = await getDoc(doc(db, "stations", currentStationId));
      if (snap.exists()) setStation(snap.data());
    };
    fetchStation();
  }, []);

  const handleOpenMap = () => {
    const { latitude, longitude } = station;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const goToMessagePage = () => {
    router.push({
      pathname: "/dashboard/driverMessage",
      params: {
        currentStationId,
        nextStationId: station?.nextStationId || "",
        stationName: station?.name || "",
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚂 Train Driver Page</Text>
      <Button title="📍 Open Map" onPress={handleOpenMap} />
      <Button title="📨 Send Message to Next Station" onPress={goToMessagePage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
