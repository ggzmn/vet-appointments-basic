import { Table } from "@chakra-ui/react";

const APPOINTMENTS = [
  {
    petName: "Rex",
    ownerName: "John Smith",
    time: "09:00 AM",
    registerDate: new Date().toLocaleString(),
    description: "Annual vaccination and general checkup",
  },
  {
    petName: "Whiskers",
    ownerName: "Emily Davis",
    time: "10:30 AM",
    registerDate: new Date().toLocaleString(),
    description: "Follow-up on dental surgery recovery",
  },
  {
    petName: "Buddy",
    ownerName: "Michael Brown",
    time: "01:15 PM",
    registerDate: new Date().toLocaleString(),
    description: "Skin irritation and allergy consultation",
  },
];

export default function AppointmentsTable() {
  return (
    <Table.Root variant="outline" mt="6">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Pet Name</Table.ColumnHeader>
          <Table.ColumnHeader>Owner Name</Table.ColumnHeader>
          <Table.ColumnHeader>Registration date</Table.ColumnHeader>
          <Table.ColumnHeader>Time</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {APPOINTMENTS.map(
          ({ petName, ownerName, time, description, registerDate }) => (
            <Table.Row key={petName}>
              <Table.Cell>{petName}</Table.Cell>
              <Table.Cell>{ownerName}</Table.Cell>
              <Table.Cell>{registerDate}</Table.Cell>
              <Table.Cell>{time}</Table.Cell>
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          ),
        )}
      </Table.Body>
    </Table.Root>
  );
}
