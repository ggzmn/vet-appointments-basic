import Navbar from "@/components/ui/navbar";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container px="14">
      <Navbar />
      <Outlet />
    </Container>
  );
}
