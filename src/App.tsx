import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import NavBar from "./component/Navbar";
import PlatFormSelector from "./component/PlatFormSelector";
import SortSelector from "./component/SortSelector";

function App() {
  const [genres, setGenres] = useState("action");
  const [platform, setPlatform] = useState("1");
  const [sort, setSort] = useState("name");
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingLeft={"20px"} paddingTop="60px">
          <GenresList
            onSelect={(e) => {
              setGenres(e);
            }}
            seletedGenre={genres}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Flex paddingLeft={6}>
          <PlatFormSelector
            onSelect={(e) => {
              setPlatform(e);
            }}
          />
          <Box width={3} />
          <SortSelector
            onSelect={(e) => {
              setSort(e);
            }}
            currentSort={sort}
          />
        </Flex>
        <GameGrid genres={genres} platformId={platform} sortBy={sort} />
      </GridItem>
    </Grid>
  );
}

export default App;
