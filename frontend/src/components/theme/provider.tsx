import { system } from "@/components/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

function ProviderTheme({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider>{children}</ThemeProvider>
    </ChakraProvider>
  );
}

export default ProviderTheme;
