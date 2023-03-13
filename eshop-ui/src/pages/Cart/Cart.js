import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import { useCartContext } from "./CartContextProvider";
import Decimal from "decimal.js";

const Cart = () => {
  const { products, getTotalSum, removeProduct } = useCartContext();

  const [buyBtnDisabled, setBuyBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    const value = products.length === 0;
    setBuyBtnDisabled(value);
  }, [products]);

  const buyProductsHandler = () => {
    console.log("nupirkom kazka");
  };

  const noProductsElement = !products.length && (
    <TableRow>
      <TableCell colSpan={5} align="center">
        No products found
      </TableCell>
    </TableRow>
  );

  const productsElement = products.map((listProduct, i) => (
    <TableRow key={i}>
      <TableCell>{listProduct.name}</TableCell>
      <TableCell>{listProduct.price}</TableCell>
      <TableCell>{listProduct.quantity}</TableCell>
      <TableCell>{new Decimal(listProduct.price).mul(listProduct.quantity).toString()}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={() => removeProduct(listProduct.id)}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pavadinimas</TableCell>
            <TableCell>Kaina</TableCell>
            <TableCell>Kiekis</TableCell>
            <TableCell>Suma</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{noProductsElement || productsElement}</TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>Total</TableCell>
            <TableCell>{getTotalSum().toString()}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Button disabled={buyBtnDisabled} onClick={buyProductsHandler}>
        BUY PRODUCTS
      </Button>
    </React.Fragment>
  );
};

export default Cart;
