import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import Input from "./Input";
import Button from "../Ui/Button";
import { getFormatDate } from "../../utility/date";
import { InputAccessoryView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MovementForm = ({
  onSubmit,
  onCancel,
  submitButtonLabel,
  defaultValues,
}) => {
  const [input, setInput] = useState({
    CourseNum: {
      value: defaultValues ? defaultValues?.CourseNum?.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormatDate(defaultValues.date) : "",
      isValid: true,
    },
    Subject: {
      value: defaultValues ? defaultValues.Subject : "",
      isValid: true,
    },
    Times: {
      value: defaultValues ? defaultValues.Times : "",
      isValid: true,
    },
    NumClass: {
      value: defaultValues ? defaultValues.NumClass : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enterValue) => {
    setInput((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: { value: enterValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const tableData = {
      CourseNum: input.CourseNum.value,
      date: new Date(input.date.value),
      Subject: input.Subject.value,
      Times: input.Times.value,
      NumClass: input.NumClass.value,
      description: input.description.value,
    };

    console.log(tableData);

    // console.log(isNaN(tableData.CourseNum));
    const CourseNumIsValid =
      !isNaN(tableData.CourseNum) &&
      tableData.CourseNum > 0 &&
      tableData.CourseNum.length < 9;
    const dateIsValid = tableData.date.toString() !== "Invalid Date";

    const SubjectIsValid = tableData.Subject.trim().length > 0;

    const TimesIsValid = tableData?.Times?.trim().length > 0;

    const NumClassIsValid =
      !isNaN(tableData.NumClass) &&
      tableData.NumClass > 0 &&
      tableData.NumClass.length < 4;

    const descriptionIsValid = tableData?.Times?.trim().length > 0;

    if (
      !CourseNumIsValid ||
      !dateIsValid ||
      !SubjectIsValid ||
      !TimesIsValid ||
      !descriptionIsValid ||
      !NumClassIsValid
    ) {
      // Alert.alert("Invalid Input", "Please correct your input values");
      setInput((curInputs) => {
        return {
          CourseNum: {
            value: curInputs.CourseNum.value,
            isValid: CourseNumIsValid,
          },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          Subject: {
            value: curInputs.Subject.value,
            isValid: SubjectIsValid,
          },
          NumClass: {
            value: curInputs.NumClass.value,
            isValid: NumClassIsValid,
          },
          Times: {
            value: curInputs.Times.value,
            isValid: TimesIsValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(tableData);
  };

  const formIsInValid =
    !input.CourseNum.isValid ||
    !input.date.isValid ||
    !input.Subject.isValid ||
    !input.Times.isValid ||
    !input.description.isValid ||
    !input.NumClass.isValid;

  return (
    <View style={styles.form}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>????????????????????????</Text>
        <View style={styles.inputRow}>
          <Input
            style={styles.rowInput}
            label="????????????????????????"
            invalid={!input.CourseNum.isValid}
            textInputConfig={{
              keyboardType: "decimal-pad",
              placeholder: "????????????????????????",
              onChangeText: inputChangeHandler.bind(this, "CourseNum"),
              value: input.CourseNum.value,
            }}
          />
          <Input
            style={styles.rowInput}
            label="??????????????????"
            invalid={!input.date.isValid}
            textInputConfig={{
              keyboardType: "decimal-pad",
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: input.date.value,
            }}
          />
        </View>
        <Input
          style={styles.rowInput}
          label="????????????"
          invalid={!input.Subject.isValid}
          textInputConfig={{
            placeholder: "?????????????????????",
            // value: input.CourseNum.value,
            onChangeText: inputChangeHandler.bind(this, "Subject"),
            value: input.Subject.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="???????????????????????????????????????"
          invalid={!input.NumClass.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "000",
            // value: input.CourseNum.value,
            onChangeText: inputChangeHandler.bind(this, "NumClass"),
            value: input.NumClass.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="??????????????????????????????"
          invalid={!input.Times.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "00.00",
            // value: input.CourseNum.value,
            onChangeText: inputChangeHandler.bind(this, "Times"),
            value: input.Times.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="??????????????????????????????"
          invalid={!input.description.isValid}
          textInputConfig={{
            // keyboardType: "decimal-pad",
            placeholder: "",
            // value: input.CourseNum.value,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: input.description.value,
          }}
        />
        {formIsInValid && (
          <Text style={styles.errorText}>
            ???????????????????????????????????????????????????????????????????????? : ?????????????????????????????????????????????????????????????????????????????????
          </Text>
        )}
        <View style={styles.buttons}>
          <Button style={styles.button} mode="flat" onPress={onCancel}>
            ??????????????????
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {submitButtonLabel}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#7D5846",
    marginVertical: 16,
    textAlign: "center",
  },
  inputRow: {
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    margin: 8,
    color: "#D96666",
  },
});

export default MovementForm;
