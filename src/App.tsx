import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import NavBar from "./component/Navbar";
import PlatFormSelector from "./component/PlatFormSelector";

function App() {
  const [genres, setGenres] = useState("action");
  const [platform, setPlatform] = useState("1");
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
        <PlatFormSelector
          onSelect={(e) => {
            setPlatform(e);
          }}
        />
        <GameGrid genres={genres} platformId={platform} />
      </GridItem>
    </Grid>
  );
}

export default App;
