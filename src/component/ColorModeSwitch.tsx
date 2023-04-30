import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const color = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={color.colorMode == "dark"}
        onChange={color.toggleColorMode}
        colorScheme="green"
      />
      <Text>{color.colorMode == "dark" ? "Light mode" : "Dark mode"}</Text>
    </HStack>
  );
};
export default ColorModeSwitch;
