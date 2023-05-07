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
      <Text whiteSpace={"nowrap"}>
        {color.colorMode == "dark" ? "Dark mode" : "Light mode"}
      </Text>
    </HStack>
  );
};
export default ColorModeSwitch;
