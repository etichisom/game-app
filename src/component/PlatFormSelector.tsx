import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import usePlatform from '../hooks/usePlatform';
interface Props{
    onSelect:(e:string)=>void
}
const PlatFormSelector = (props:Props) => {
    const {data,error,loading} =usePlatform();
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
      Platforms
    </MenuButton>
    <MenuList>
      {data.map((e,index)=>(
        <MenuItem key={index} onClick={()=>{
            props.onSelect(e.id.toString());
        }}>{e.name}</MenuItem>
      ))}
    </MenuList>
  </Menu>
  )
}

export default PlatFormSelector