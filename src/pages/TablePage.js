import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const rows = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
];

const TablePage = () => (
  <Paper sx={{ margin: 2, padding: 2 }}>
    <Typography variant="h5" gutterBottom>User Table</Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow><TableCell>ID</TableCell><TableCell>Name</TableCell><TableCell>Role</TableCell></TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default TablePage;
