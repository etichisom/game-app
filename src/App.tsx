import { Grid, GridItem, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./component/ColorModeSwitch";
import GameGrid from "./component/GameGrid";
import NavBar from "./component/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Nav</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
