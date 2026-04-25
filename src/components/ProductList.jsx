import { useCartContext } from "./CartContext";
import { PRODUCTS } from "../consts/products";
import { Card, CardHeader, CardActions, Button, Stack } from "@mui/material";

export const ProductList = () => {
  const { addProduct } = useCartContext();

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2, p: 2 }}>
      {PRODUCTS.map((item) => (
        <Card key={item.id}>
          <CardHeader title={`${item.title}`}></CardHeader>
          <CardActions>
            <Button onClick={() => addProduct(item.id)}>Add</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};
