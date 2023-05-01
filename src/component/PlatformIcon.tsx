import { AiFillWindows, AiOutlineApple } from "react-icons/ai";
import { FaPlaystation, FaXbox, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch, BsApple } from "react-icons/bs";
import { ParentPlatform } from "../model/gameModel";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: ParentPlatform[];
}
const PlatFormIcon = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: AiFillWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: BsApple,
    linux: FaLinux,
    ios: AiOutlineApple,
  };
  console.log(iconMap["pc"]);
  return (
    <>
      <HStack>
        {platform.map((e) => (
          <Icon as={iconMap[e.platform.slug]} color="gray.500" boxSize={5}/>
        ))}
      </HStack>
    </>
  );
};

export default PlatFormIcon;
