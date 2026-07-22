import Navbar from "@/components/ui/navbar";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container p="10">
      <Navbar />
      <Outlet />
    </Container>
  );
}
