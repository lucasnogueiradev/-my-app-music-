import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#131116",
  },
  content: {},
  layout: {},
  noVideosContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoItemContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    width: "100%",
    paddingHorizontal: 8,
    borderRadius: 13,
    paddingLeft: 13,
    color: "#fff",
  },
  button: {
    backgroundColor: "#6a1b9a",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
