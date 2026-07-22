import Cards from "@/components/dashboard/elements/cards";
import QuicklyActions from "@/components/dashboard/elements/quickly-actions";
import AppointmentsTable from "@/components/dashboard/elements/table";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <QuicklyActions />
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <AppointmentsTable />
        </GridItem>
        <GridItem colSpan={1}>
          <Cards />
        </GridItem>
      </Grid>
    </>
  );
}
