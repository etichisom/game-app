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

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={"10px"} overflow="hidden">
      <Image src={props.game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"25px"}>{props.game.name}</Heading>
        <HStack justifyContent={"space-between"} paddingTop="10px">
          <PlatFormIcon platform={props.game.parent_platforms} />
          <Badge color={"green.500"}>{props.game.metacritic}</Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
