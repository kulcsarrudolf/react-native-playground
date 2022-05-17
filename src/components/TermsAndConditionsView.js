import { StyleSheet, Text } from "react-native";

const TermsAndConditionsView = () => (
  <>
    <Text style={styles.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus est
      felis, et aliquam mauris eleifend ut. Cras quis maximus nisi. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Vestibulum ac turpis non quam efficitur maximus. Donec iaculis dignissim
      nulla sed tristique. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Nunc bibendum ornare diam, vel
      tincidunt odio aliquam eu. Integer ac interdum nulla. Cras dictum justo a
      purus cursus venenatis. Donec non nibh lobortis, congue augue sit amet,
      tempus est.
    </Text>
    <Text style={styles.paragraph}>
      Sed vel ante sit amet purus sodales condimentum. Suspendisse consectetur,
      justo at consequat interdum, diam ex interdum est, quis vulputate nisl leo
      a ex. Nunc felis ipsum, pulvinar ut tincidunt sit amet, fringilla et
      ligula. Sed ornare mauris mi, convallis consequat dolor fermentum quis.
      Phasellus tincidunt quis erat ac mattis. Nulla ut est vitae lacus
      hendrerit vestibulum. Quisque bibendum justo elit, nec convallis tellus
      pellentesque a. In convallis augue tempus dolor finibus, vel pretium eros
      aliquet. Phasellus luctus sapien purus, pulvinar pharetra eros venenatis
      ac. Sed sodales aliquam metus. Aliquam ex ipsum, lacinia in aliquam in,
      malesuada sit amet erat. Donec gravida massa vitae mauris pretium
      accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia curae; Vestibulum at elit turpis.
    </Text>
    <Text style={styles.paragraph}>
      Nullam ac lobortis diam. Quisque tincidunt egestas lectus malesuada
      mollis. Mauris maximus bibendum sem, vitae venenatis orci. Curabitur
      tempus, libero eu eleifend tempor, nisi purus placerat ex, vel dapibus
      nulla ligula pulvinar metus. Nulla facilisi. Maecenas ac nisl quis dolor
      maximus dictum at ut lacus. Pellentesque viverra ultricies iaculis. Donec
      rutrum aliquet enim. Proin aliquam faucibus justo eget pretium.
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

export default TermsAndConditionsView;
