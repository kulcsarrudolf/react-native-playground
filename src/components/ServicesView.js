import { StyleSheet, Text } from "react-native";

const ServicesView = () => (
  <>
    <Text style={styles.paragraph}>
      Sed vel ante sit amet purus sodales condimentum. Suspendisse consectetur,
      justo at consequat interdum, diam ex interdum est, quis vulputate nisl leo
      a ex. Nunc felis ipsum, pulvinar ut tincidunt sit amet, fringilla et
      ligula. Sed ornare mauris mi, convallis consequat dolor fermentum quis.
      Phasellus tincidunt quis erat ac mattis. Nulla ut est vitae lacus
      hendrerit vestibulum. Quisque bibendum justo elit, nec convallis tellus
      pellentesque a. In convallis augue tempus dolor finibus, vel pretium eros
      aliquet.
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

export default ServicesView;
