import { useCartContext } from './CartContext';
import {Card, CardContent, CardActions, Button, Stack, Typography} from '@mui/material';


export const Cart = () => {
    const {cart, removeProduct} = useCartContext();

    return (
        <>
        <Typography variant='h6'>
            Cart:
        </Typography>
        {cart.length > 0 
        ? <Stack direction='row' spacing={2}  >
            {cart.map((item) => (
            <Card key={item.id}>
                <CardContent>
                    <Typography>{item.title}</Typography>
                    <Typography>Quantity: {item.count}</Typography>
                </CardContent>
                
                <CardActions>
                    <Button color='error' onClick={() => removeProduct(item.id)}>Delete</Button>
                </CardActions>
            </Card>
            ))}
        </Stack>
        : 'Cart is empty'
        }
        </>
        
    )
}