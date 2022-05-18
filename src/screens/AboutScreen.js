import { useState } from "react";

import { Text, View, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./AboutScreen.style";

import AboutView from "../components/AboutView";
import ServicesView from "../components/ServicesView";
import TermsAndConditionsView from "../components/TermsAndConditionsView";
import BackButton from "../components/BackButton";

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

const AboutScreen = () => {
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
};

export default AboutScreen;
