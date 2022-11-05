import { Link, Text } from "@chakra-ui/react";


const MenuItem = ({ menuItem }) => {
  return (
    <Text fontSize="20px" mb={2}>
      <Link href={menuItem.link} textDecoration="none" 
      _hover={{
        color:"red"
      }}
      >{menuItem.menu}</Link>
    </Text>
  );
};

export default MenuItem;
