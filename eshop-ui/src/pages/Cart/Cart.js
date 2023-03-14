import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import Decimal from "decimal.js";
import { useSelector, useDispatch } from "react-redux";
import { storeRemoveProduct } from "../../store/reduxStore";

const BUY_BTN_CONST = "BUY_BTN_CONST";
const buyBtnReducer = (state, action) => {
  if (action.type === BUY_BTN_CONST) {
    return action.isDisabled;
  }
  return state;
};

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const totalSum = useSelector((state) => state.totalSum);
  const cartEmpty = useSelector((state) => state.cartEmpty);

  const [buyBtnDisabled, dispatchBuyBtn] = React.useReducer(buyBtnReducer, cartEmpty);

  const buyProductsHandler = () => {
    console.log("nupirkom kazka");
  };

  const productRemoveHandler = (productId) => {
    dispatch(storeRemoveProduct(productId));
    //todo fix me (turbut nebeveiks buy btn notify)
    dispatchBuyBtn({ type: BUY_BTN_CONST, isDisabled: products.length === 0 });
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
        <Button variant="contained" onClick={() => productRemoveHandler(listProduct.id)}>
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
            <TableCell>{totalSum.toString()}</TableCell>
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
