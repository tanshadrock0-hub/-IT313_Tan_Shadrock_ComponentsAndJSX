import { StyleSheet, Text, View } from "react-native";

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.studentName}>{name}</Text>

        {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
      </View>

      <Text style={styles.detail}>Course: {course}</Text>

      <Text style={styles.detail}>Units Enrolled: {units}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: "#2878B5",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  studentName: {
    flexShrink: 1,
    marginRight: 8,
    fontSize: 19,
    fontWeight: "bold",
    color: "#17365D",
  },
  fullLoad: {
    color: "#FFFFFF",
    backgroundColor: "#218838",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 15,
    color: "#444444",
    marginTop: 5,
  },
});
