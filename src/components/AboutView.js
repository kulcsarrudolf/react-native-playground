import { StyleSheet, Text } from "react-native";

const AboutView = () => (
  <>
    <Text style={styles.paragraph}>
      Nunc bibendum ornare diam, vel tincidunt odio aliquam eu. Integer ac
      interdum nulla. Cras dictum justo a purus cursus venenatis. Donec non nibh
      lobortis, congue augue sit amet, tempus est.
    </Text>
  </>
);

const styles = StyleSheet.create({
  paragraph: {
    color: "#1e1b18",
    lineHeight: 25,
    marginBottom: 20,
  },
});

export default AboutView;
