import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null >(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
        return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: myColors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: myColors.result}]}>{result?.toString()}</Text>; 
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
      switch (operation) {
        case "+":
            clear();
            setResult(parseInt(secondNumber) + parseInt(firstNumber));
            break;
        case "-":
            clear();
            setResult(parseInt(secondNumber) - parseInt(firstNumber));
            break;
        case "*":
            clear();
            setResult(parseInt(secondNumber) * parseInt(firstNumber));
            break;
        case "/":
            clear();
            setResult(parseInt(secondNumber) / parseInt(firstNumber));
            break;
        default:
            clear();
            setResult(0);
            break;
        }
    };

    return (
      <View style={{ flex: 1, backgroundColor: "#1e1e2d", justifyContent: "flex-end", paddingBottom: 20 }}>
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#f5f5f5", fontSize: 40, fontWeight: "bold", textAlign: "right", marginBottom: 10 }}>
            {secondNumber}
            <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>{operation}</Text>
          </Text>
          {firstNumberDisplay()}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 10 }}>
          <Button title="C" isGray onPress={clear} style={{ backgroundColor: "#a6a6a6", color: "#fff", fontWeight: "bold" }} />
          <Button
            title="+/-"
            isGray
            onPress={() => handleOperationPress("+/-")}
            style={{ backgroundColor: "#a6a6a6", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="％"
            isGray
            onPress={() => handleOperationPress("％")}
            style={{ backgroundColor: "#a6a6a6", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="÷"
            isBlue
            onPress={() => handleOperationPress("/")}
            style={{ backgroundColor: "#4a90e2", color: "#fff", fontWeight: "bold" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 10 }}>
          <Button
            title="7"
            onPress={() => handleNumberPress("7")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="8"
            onPress={() => handleNumberPress("8")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="9"
            onPress={() => handleNumberPress("9")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="×"
            isBlue
            onPress={() => handleOperationPress("*")}
            style={{ backgroundColor: "#4a90e2", color: "#fff", fontWeight: "bold" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 10 }}>
          <Button
            title="4"
            onPress={() => handleNumberPress("4")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="5"
            onPress={() => handleNumberPress("5")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="6"
            onPress={() => handleNumberPress("6")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="-"
            isBlue
            onPress={() => handleOperationPress("-")}
            style={{ backgroundColor: "#4a90e2", color: "#fff", fontWeight: "bold" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 10 }}>
          <Button
            title="1"
            onPress={() => handleNumberPress("1")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="2"
            onPress={() => handleNumberPress("2")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="3"
            onPress={() => handleNumberPress("3")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="+"
            isBlue
            onPress={() => handleOperationPress("+")}
            style={{ backgroundColor: "#4a90e2", color: "#fff", fontWeight: "bold" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginVertical: 10 }}>
          <Button
            title="."
            onPress={() => handleNumberPress(".")}
            style={{ backgroundColor: "#ff9800", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="0"
            onPress={() => handleNumberPress("0")}
            style={{ backgroundColor: "#4caf50", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="⌫"
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
            style={{ backgroundColor: "#f44336", color: "#fff", fontWeight: "bold" }}
          />
          <Button
            title="="
            isBlue
            onPress={() => getResult()}
            style={{ backgroundColor: "#3f51b5", color: "#fff", fontWeight: "bold" }}
          />
        </View>
      </View>
    );
    
}