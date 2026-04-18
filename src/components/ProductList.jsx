import { useCartContext } from './CartContext';
import {Card, CardHeader, CardActions, Button, Stack} from '@mui/material';

export const ProductList = () => {
    const {addProduct, PRODUCTS} = useCartContext();

    return (
        <Stack direction='row' spacing={2} sx={{mb:2}} >
            {PRODUCTS.map((item) => (
            <Card key={item.id}>
                <CardHeader title={`${item.title}`}></CardHeader>
                <CardActions>
                    <Button onClick={() => addProduct(item.id)}>Add</Button>
                </CardActions>
            </Card>
            ))}
        </Stack>
    )
}