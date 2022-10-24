import { useContext } from "react";
import { React, useEffect, useState } from "react";
import MovementsOutput from "../components/MovementsOutput";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MovementsContext } from "../store/movements-context";
import { AntDesign } from "@expo/vector-icons";

const detailScreens = ({ route, navigation }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(route.params.item);
  }, []);

  const MovementsCtx = useContext(MovementsContext);
  //   const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <Text style={styles.header}>รายละเอียดการสอบ</Text>
      <View style={styles.movement}>
        <View style={styles.CourseNumContainer}>
          <Text style={styles.CourseNum1}>รหัสวิชาสอบ</Text>
          <Text style={styles.CourseNum}>{data.CourseNum}</Text>
        </View>
      </View>
      <View style={styles.movement}>
        <View style={styles.CourseNumContainer}>
          <Text style={styles.CourseNum1}>ชื่อวิชา</Text>
          <Text style={styles.CourseNum}>{data.Subject}</Text>
        </View>
      </View>
      <View style={styles.movement}>
        <View style={styles.CourseNumContainer}>
          <Text style={styles.CourseNum1}>เวลาที่สอบ</Text>
          <Text style={styles.CourseNum}>{data.Times}</Text>
        </View>
      </View>
      <View style={styles.movement}>
        <View style={styles.CourseNumContainer}>
          <Text style={styles.CourseNum1}>รายละเอียด</Text>
          <Text style={styles.CourseNum}>{data.description}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Manage", { movId: data.id })}
      >
        <AntDesign name="setting" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: { padding: 10 },
  header: {
    marginVertical: 6,
    backgroundColor: "#BB8D76",
    color: "#fff",
    fontSize: 20,
    padding: 12,
    borderRadius: 16,
  },
  movement: {
    flexDirection: "row",
    backgroundColor: "#DECDC5",
    padding: 12,
    marginVertical: 8,
    elevation: 3,
    justifyContent: "space-between",
    borderRadius: 16,
    shadowColor: "#BB8D76",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  CourseNumContainer: {
    backgroundColor: "#DECDC5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    shadowColor: "#BB8D76",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    justifyContent: "space-between",
    minWidth: 80,
    // borderBottomEndRadius: "#7D5846",
  },
  CourseNum1: {
    fontSize: 20,
    fontWeight: "400",
    color: "#7D5846",
  },
  CourseNum: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7D5846",
  },
});

export default detailScreens;
