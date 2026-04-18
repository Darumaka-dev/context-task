import { useCartContext } from './CartContext';
import {AppBar, Box, Toolbar, IconButton, Badge} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header = () => {
    const {cart} = useCartContext();

    const countCart = cart?.reduce((acc, currentValue) =>  acc + currentValue.count, 0) || 0;

    return (
        <Box sx={{ flexGrow: 1, mb:2}}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={`${countCart}`} color="info">
                <ShoppingCartIcon color='action' />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    )
}