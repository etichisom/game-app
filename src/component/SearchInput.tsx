import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Prop {
  search: (e: string) => void;
}

const SearchInput = (props: Prop) => {
  const formRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (formRef.current) {
            props.search(formRef.current.value);
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={formRef}
            type="text"
            placeholder="Search games..."
            borderRadius={20}
            variant="filled"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
