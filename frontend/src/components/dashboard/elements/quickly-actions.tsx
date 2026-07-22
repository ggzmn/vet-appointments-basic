import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router";

const QUICK_ACTIONS = [
  { path: "/appointments", label: "New Appointment" },
  { path: "/animals", label: "New Patient" },
  { path: "/owners", label: "New Owner" },
];

export default function QuicklyActions() {
  return (
    <HStack gap="4" mt="6" wrap="wrap">
      {QUICK_ACTIONS.map(({ path, label }) => (
        <Button key={path} asChild colorPalette="orange">
          <Link to={path}>{label}</Link>
        </Button>
      ))}
    </HStack>
  );
}
