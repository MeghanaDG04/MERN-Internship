import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, password, phone, address) {
  return { name, email, password, phone, address };
}

const rows = [
  createData('User1', 'user1@gmail.com',' User1@123', 1234567890, 'Address1'),
  createData('User2', 'user2@gmail.com',' User2@123', 1234567890, 'Address2'),
  createData('User3', 'user3@gmail.com',' User3@123', 1234567890, 'Address3'),
  createData('User4', 'user4@gmail.com',' User4@123', 1234567890, 'Address4'),
  createData('User5', 'user5@gmail.com',' User5@123', 1234567890, 'Address5'),
];

export default function Manageuser() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
