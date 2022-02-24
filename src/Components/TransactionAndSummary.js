import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Transaction = (props) => {
  return (
    <TransactionDiv>
      <Paper style={{ width: '100%', height: '250px', overflow: 'hidden' }}>
        <TableContainer style={{ maxHeight: 250 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align='right'>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.products.map((product) => (
                <TableRow hover role='checkbox' tabIndex={-1}>
                  <TableCell key={product.productName}>
                    {product.productName}
                  </TableCell>
                  <TableCell key={product.price}>{product.price}</TableCell>
                  <TableCell key={product.quantity} align='right'>
                    {product.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div
        style={{ textAlign: 'right', marginTop: '40px', paddingRight: '20px' }}
      >
        <text>{`Subtotal: ${props.subtotal}`}</text>
        <br />
        <text>{`Tax: ${props.tax}`}</text>
        <br />
        <text>{`Total: ${
          Math.round((props.subtotal + props.tax) * 100) / 100
        }`}</text>
      </div>
      <Stack
        spacing={5}
        direction='row'
        justifyContent='center'
        alignItems='center'
        style={{ marginTop: '15px' }}
      >
        <Button variant='contained' onClick={() => props.voidTransaction()}>
          Void
        </Button>
        <Button variant='contained' onClick={() => props.saveTransaction()}>
          Save
        </Button>
      </Stack>
    </TransactionDiv>
  );
};

const TransactionDiv = styled.div`
  width: 45%;
  height: 80%;
`;

export default Transaction;
