import { useContext } from "react";
import { React, useEffect, useState } from "react";
import MovementsOutput from "../components/MovementsOutput";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MovementsContext } from "../store/movements-context";
import { FontAwesome } from "@expo/vector-icons";

const detailScreens = ({ route, navigation }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(route.params.item);
  }, []);

  // const MovementsCtx = useContext(MovementsContext);
  //   const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.navigate("Manage", { movId: data.id })}>
        <Text style={styles.header} ><FontAwesome name="edit" size={20} color="#fff" />  เเก้ไขรายละเอียดการสอบ </Text>
      </TouchableOpacity>
      

      <View style={styles.movement}>
        <View style={styles.CourseNumContainer}>

        <View style={styles.detail}>
          <Text style={styles.CourseNum1}>รหัสวิชาสอบ  :  </Text>
          <Text style={styles.CourseNum}> {data.CourseNum}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.CourseNum1}>ชื่อวิชา  :  </Text>
          <Text style={styles.CourseNum}>{data.Subject}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.CourseNum1}>เวลาที่สอบ  :  </Text>
          <Text style={styles.CourseNum}>{data.Times}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.CourseNum1}>รายละเอียด  :  </Text>
          
          <View style={styles.detail2}>
            <Text style={styles.CourseNum}>{data.description}</Text>
          </View>
        </View>

        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  Container: { padding: 10 },
  header: {
    flexDirection: "row",
    padding: 16,
    marginVertical: 6,
    elevation: 0,
    justifyContent: "space-between",
    backgroundColor: "#BB8D76",
    color:"#fff",
    borderRadius: 4,
    minWidth: 80,
    shadowOffset: { width: 1, height: 1 },
    fontSize:20,
    fontWeight: "400",
    textDecorationLine: "underline"
    // flexDirection: "row-reverse",
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
    fontSize: 18,
    fontWeight: "700",
    color: "#7D5846",
  },
  CourseNum: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7D5846",
  },
  CourseNum1: {
    fontSize: 18,
    fontWeight: "400",
    color: "#7D5846",
    

  },
  detail:{
    flexDirection : "row",
    justifyContent : "flex-start",
    padding: 8,
  },
  detail2:{
    flexDirection:"column",

  }
 
});

export default detailScreens;
