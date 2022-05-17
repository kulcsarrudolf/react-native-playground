import { useState } from "react";

import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Constants from "expo-constants";

import AboutView from "./src/components/AboutView";
import ServicesView from "./src/components/ServicesView";
import TermsAndConditionsView from "./src/components/TermsAndConditionsView";
import BackButton from "./src/components/BackButton";

const topics = [
  {
    key: "about",
    name: "About",
    element: AboutView,
  },
  {
    key: "services",
    name: "Services",
    element: ServicesView,
  },
  {
    key: "terms",
    name: "Terms & Conditions",
    element: TermsAndConditionsView,
  },
  {
    key: "contact",
    name: "Contact Us",
    element: TermsAndConditionsView,
  },
];

export default function App() {
  const [currentTopic, setCurrentTopic] = useState(topics[0]);

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 25 }}>
        <View>
          <BackButton />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          About My Company
        </Text>
      </View>

      <View style={styles.topicSelectorContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
        >
          {topics.map((topic, index) => (
            <Button
              key={topic.key}
              title={topic.name}
              titleStyle={
                currentTopic.key === topic.key
                  ? styles.topicSelectorButtonTitleActive
                  : styles.topicSelectorButtonTitle
              }
              buttonStyle={
                currentTopic.key === topic.key
                  ? styles.topicSelectorButtonActive
                  : styles.topicSelectorButton
              }
              onPress={() => {
                setCurrentTopic(topics[index]);
              }}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <currentTopic.element />
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

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

const styles = StyleSheet.create({
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
