import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fae6ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 360,
    height: 120,
    marginBottom: 50,
    borderColor: '#fae6ff',
    borderWidth: 2,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default styles;
