import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function ButtonVacante({ children, to, mb = "0" }) {
  const navigate = useNavigate();

  return (
    <Button
      w="10rem"
      color="white"
      onClick={() => navigate(to)}
      mb={mb}
      bg="#acb6e5"
      _hover={{ bg: "#949cc6" }}
    >
      {children}
    </Button>
  );
}
