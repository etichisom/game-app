import { Heading } from "@chakra-ui/react";
interface Prop {
  genre: string;
}

const GameHeading = (props: Prop) => {
  const gameName = `${props.genre} games`;
  return (
    <>
      <Heading paddingLeft={6}>{gameName}</Heading>
    </>
  );
};

export default GameHeading;
