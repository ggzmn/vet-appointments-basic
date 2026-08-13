import { NAV_ITEMS } from "@/constants/routers";
import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <HStack
      as="nav"
      gap="2"
      p="4"
      flex="fit-content"
      width="full"
      bg="teal.500"
    >
      {NAV_ITEMS.map(({ path, label }) => (
        <Button key={path} asChild variant="ghost" color="white" fontSize="lg">
          <NavLink
            to={path}
            end={path === "/"}
            style={({ isActive }) => ({
              background: isActive ? "#FFF" : "",
              color: isActive ? "var(--chakra-colors-teal-500)" : "",
            })}
          >
            {label}
          </NavLink>
        </Button>
      ))}
    </HStack>
  );
}
