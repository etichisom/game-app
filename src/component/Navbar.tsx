import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/user_con.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Prop{
  search:(e:string)=>void
}
const NavBar = (props:Prop) => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput search={(e)=>{
        props.search(e);
      }}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
