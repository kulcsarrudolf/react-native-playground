import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const topicSelectorButton = {
  padding: 10,
  borderRadius: 20,
  marginRight: 10,
  backgroundColor: "#f8f8f8",
};

const topicSelectorButtonActive = {
  ...topicSelectorButton,
  backgroundColor: "#00b4d8",
};

const topicSelectorButtonTitle = {
  color: "#1e1b18",
};

const topicSelectorButtonTitleActive = {
  ...topicSelectorButtonTitle,
  color: "#fff",
};

const aboutScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50,
    marginBottom: 175,
    backgroundColor: "#fff",
  },
  paragraph: {
    color: "#1e1b18",
    lineHeight: 25,
    marginBottom: 20,
  },
  topicSelectorContainer: {
    marginVertical: 32,
    paddingLeft: 25,
  },
  topicSelectorButton: topicSelectorButton,
  topicSelectorButtonTitle: topicSelectorButtonTitle,
  topicSelectorButtonActive: topicSelectorButtonActive,
  topicSelectorButtonTitleActive: topicSelectorButtonTitleActive,
  contentContainer: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#F8F8F8",
    padding: 25,
  },
});

export default aboutScreenStyles;
