import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import StudentCard from "../components/StudentCard";

interface Student {
  id: string;
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentRoster() {
  const students: Student[] = [
    {
      id: "s1",
      name: "Ana Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ];

  const [isReversed, setIsReversed] = useState(false);

  const displayedStudents = isReversed ? [...students].reverse() : students;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>IT313 Student Roster</Text>

        <Text style={styles.subtitle}>Total Students: {students.length}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsReversed((previous) => !previous)}
        >
          <Text style={styles.buttonText}>Reverse Roster</Text>
        </TouchableOpacity>

        {displayedStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FA",
  },
  content: {
    padding: 20,
    paddingBottom: 35,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#17365D",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#2878B5",
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
