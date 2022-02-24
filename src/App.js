import * as React from 'react';
import { useState } from 'react';
import TransactionAndSummary from './Components/TransactionAndSummary';
import ProductsScrollBar from './Components/ProductsScrollBar';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { saveAs } from 'file-saver';

function App() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [moreThanTenProductsAlert, setMoreThanTenProductsAlert] =
    useState(false);

  const addQuantityOfOne = (productName, category, hasTax, price) => {
    if (products.length + 1 > 10) {
      console.log('has more than 10 products');
      setMoreThanTenProductsAlert(true);
      return;
    }
    /**
     *  Add quantity of one to a specific product
     *  update list of products
     *  update the subtotal
     *  update tax accordingly
     *  update the total
     */
    console.log('add quantity of 1.');
    const productIndex = hasProductInTransactionInfo(productName);
    if (productIndex === -1) {
      console.log('does not have product in transaction info');
      let newProducts = products;
      newProducts.push({
        productName,
        category,
        hasTax,
        price,
        quantity: 1,
      });
      setProducts(newProducts);
    } else {
      console.log('has product in transaction info');
      let newProducts = products;
      newProducts[productIndex].quantity += 1;
      setProducts(newProducts);
    }
    updateTransactionSummary(price, hasTax);
    console.log(products);
  };

  const updateTransactionSummary = (price, hasTax) => {
    setSubtotal(Math.round((subtotal + price) * 100) / 100);
    if (hasTax) {
      setTax(Math.round((tax + price * 0.1) * 100) / 100);
    }
  };

  const hasProductInTransactionInfo = (product) => {
    let productArrayLocation = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].productName === product) {
        productArrayLocation = i;
        break;
      }
    }
    return productArrayLocation;
  };

  const voidTransaction = () => {
    console.log('void transaction');
    setProducts([]);
    setSubtotal(0);
    setTax(0);
  };

  const saveTransaction = () => {
    console.log('save transaction');

    let fileText = '';
    products.forEach((product) => {
      fileText += JSON.stringify(product);
      fileText += '\n';
    });
    let blob = new Blob([fileText], {
      type: 'text/plain;charset=utf-8',
    });
    const date = new Date();
    saveAs(
      blob,
      `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-$${
        Math.round((subtotal + tax) * 100) / 100
      }.txt`
    );
    voidTransaction();
  };

  const handleAlertClose = () => {
    setMoreThanTenProductsAlert(false);
  };

  return (
    <AppContainer>
      <Dialog open={moreThanTenProductsAlert} onClose={handleAlertClose}>
        <DialogTitle>{'Alert'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We do not support more than 10 products in one transaction.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            onClick={handleAlertClose}
            style={{ padding: '5px' }}
          >
            Understood
          </Button>
        </DialogActions>
      </Dialog>
      <ProductsScrollBar addQuantityOfOne={addQuantityOfOne} />
      <TransactionAndSummary
        products={products}
        subtotal={subtotal}
        tax={tax}
        voidTransaction={voidTransaction}
        saveTransaction={saveTransaction}
      />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 500px;
  width: 900px;
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-style: solid;
  border-color: #01263f;
  border-radius: 15px;
  background-color: #f8f8ff;
`;

export default App;
