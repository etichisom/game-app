import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
interface Props {
  onSelect: (e: string) => void;
  currentSort:string
}

const SortSelector = (props: Props) => {
  const sort = [
    { name: "Relevance", value: "metacritic" },
    { name: "Date added", value: "added" },
    { name: "Release Data", value: "created" },
    { name: "Rating", value: "rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order By: {props.currentSort}
      </MenuButton>
      <MenuList>
        {sort.map((e, index) => (
          <MenuItem
            onClick={() => {
              props.onSelect(e.value);
            }}
            key={index}
          >
            {e.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
