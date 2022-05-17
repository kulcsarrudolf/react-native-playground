import { Button } from "react-native-elements";

const BackButton = () => (
  <Button
    buttonStyle={{
      width: 50,
      height: 50,
      marginBottom: 20,
      backgroundColor: "#f8f8f8",
    }}
    icon={{
      name: "arrow-left",
      size: 25,
      color: "#B5B5B5",
    }}
    onPress={() => {}}
  />
);

export default BackButton;
