import {
  Text,
  View,
  Pressable,
  StyleSheet,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
export default function Index() {
  const [input, setInput] = useState("");
  const colorScheme = useColorScheme();
  const handlePress = (value: string) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleRemove = () => {
    setInput(input.slice(0, -1));
  };
  const handleOperation = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      alert("Invalid operation");
    }
  };
  return (
    <>
      <View
        style={[
          styles.container,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Text
          style={[
            styles.containerText,
            colorScheme === "dark" ? { color: "white" } : { color: "black" },
          ]}>
          {input}
        </Text>
      </View>

      <View
        style={[
          styles.buttonView,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Pressable style={styles.operationButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              handleClear();
            }}>
            Ac
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              handleRemove();
            }}>
            X
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              handlePress("/");
            }}>
            /
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.buttonText} onPress={() => handlePress("*")}>
            *
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.buttonView,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("7")}>
            7
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("8")}>
            8
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("9")}>
            9
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.buttonText} onPress={() => handlePress("-")}>
            -
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.buttonView,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("4")}>
            4
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("5")}>
            5
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("6")}>
            6
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.buttonText} onPress={() => handlePress("+")}>
            +
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.buttonView,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("1")}>
            1
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("2")}>
            2
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress("3")}>
            3
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text style={styles.buttonText} onPress={() => handlePress("%")}>
            %
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.buttonView,
          colorScheme === "dark"
            ? { backgroundColor: "#001413" }
            : { backgroundColor: "#DCE1E5" },
        ]}>
        <Pressable
          style={[
            styles.zeroButton,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}>
            0
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            colorScheme === "dark"
              ? { backgroundColor: "#003D3A" }
              : { backgroundColor: "#B9C3CB" },
          ]}>
          <Text
            style={[
              styles.buttonText,
              colorScheme === "dark" ? { color: "white" } : { color: "black" },
            ]}
            onPress={() => handlePress(".")}>
            .
          </Text>
        </Pressable>
        <Pressable style={styles.operationButton}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              handleOperation();
            }}>
            =
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#001413",
  },
  containerText: {
    color: "#fff",
    fontSize: 50,
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor: "#001413",
  },
  operationButton: {
    width: 70,
    height: 70,
    alignItems: "center",
    backgroundColor: "#6F6BDB",
    borderRadius: 10,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    backgroundColor: "#003D3A",
    borderRadius: 10,
  },
  zeroButton: {
    width: 150,
    height: 70,
    alignItems: "center",
    backgroundColor: "#003D3A",
    borderRadius: 10,
  },
  equalButton: {
    backgroundColor: "#007aff",
    flex: 1,
    // marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 40,
    // fontWeight: "bold",
    padding: 10,
  },
});
