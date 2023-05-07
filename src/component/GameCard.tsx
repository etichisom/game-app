import {
  Badge,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../model/gameModel";
import PlatFormIcon from "./PlatformIcon";

interface Props {
  game: Game;
}
const imageLink = (url?: string) => {
  if (!url) {
    return "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80";
  } else {
    return url;
  }
};

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={"10px"} overflow="hidden">
      <Image src={imageLink(props.game.background_image)} height={200}></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} paddingBottom="10px" >
          <PlatFormIcon platform={props.game.parent_platforms} />
          <Badge color={"green.500"}>{props.game.metacritic}</Badge>
        </HStack>
        <Heading fontSize={"25px"}>{props.game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
