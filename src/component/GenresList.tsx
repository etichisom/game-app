import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenres";
interface Props {
  onSelect: (genres: string) => void;
  seletedGenre: string;
}
const GenresList = (props: Props) => {
  const { data, error, loading } = useGenres();
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      {loading && <Spinner />}
      <List>
        {data.map((e, index) => (
          <ListItem key={index}>
            <HStack paddingBottom={"20px"}>
              <Image src={e.image_background} boxSize="35px" borderRadius={8} fit='cover' />
              <Button
                fontSize={"lg"}
                variant="link"
                onClick={() => {
                  props.onSelect(e.slug);
                }}
                whiteSpace="normal"
                textAlign={"start"}
                fontWeight={props.seletedGenre == e.slug ? "bold" : "normal"}
              >
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
