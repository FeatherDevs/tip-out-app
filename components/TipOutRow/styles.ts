import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fae6ff",
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  input: {
    margin: 10,
    width: 85,
    height: 50,
    fontSize: 25,
    color: "#b800e6",
    backgroundColor: "white",
    textAlign: "center",
  },
  text: {
    backgroundColor: "white",
    height: 25,
    borderWidth: 1,
    fontSize: 15,
    color: "#b800e6",
    padding: 5,
    textAlign: "center",
    width: 100,
  },
  addButton: {
    margin: 10,
  },
});

export default styles;
