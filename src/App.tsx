import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import ColorModeSwitch from "./component/ColorModeSwitch";
import GameGrid from "./component/GameGrid";
import GenresList from "./component/GenresList";
import NavBar from "./component/Navbar";

function App() {
  const [genres, setGenres] = useState("puzzle");
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingLeft={"20px"} paddingTop="30px">
          <GenresList
            onSelect={(e) => {
              setGenres(e);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid genres={genres}/>
      </GridItem>
    </Grid>
  );
}

export default App;
