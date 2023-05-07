import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          type="text"
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </>
  );
};

export default SearchInput;
