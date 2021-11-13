import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { IconButton, Typography } from '@mui/material';

const ManageProducts = () => {
    const [products, setProducts] = React.useState([]);

    // load all products 
    React.useEffect(() => {
        axios.get('https://savon-server-sider-api.herokuapp.com/soaps')
            .then(res => {
                setProducts(res.data);
            })
    }, []);


    // Product delete handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this product?');
        if (proceed) {

            axios.delete(`https://savon-server-sider-api.herokuapp.com/soaps/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Product deleted Succesfully');
                        const restProducts = products.filter(product => product._id !== id);
                        setProducts(restProducts);
                    }
                });
        }
    };



    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Title
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Flavour
                            </TableCell>
                            <TableCell>
                                Rating
                            </TableCell>
                            <TableCell>
                                Stock
                            </TableCell>
                            <TableCell>
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={product._id}
                            >
                                <TableCell >
                                    {products.indexOf(product) + 1}
                                </TableCell>
                                <TableCell >
                                    {product.title}
                                </TableCell>
                                <TableCell >
                                    ${product.price}
                                </TableCell>
                                <TableCell >
                                    {product.flavour}
                                </TableCell>
                                <TableCell >
                                    {product.rating}
                                </TableCell>
                                <TableCell >
                                    In Stock
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={() => handleDelete(product._id)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            )}

                    </TableBody>
                </Table>
            </TableContainer>

            {!products.length && <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                No orders
            </Typography>
            }
        </Paper >
    );
};

export default ManageProducts;