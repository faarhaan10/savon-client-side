import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import DeleteIcon from '@mui/icons-material/Delete';
import TableRow from '@mui/material/TableRow';
import CheckIcon from '@mui/icons-material/Check';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    const { user, isLoading, setIsLoading } = useAuth();

    // load logged in users data 
    React.useEffect(() => {
        axios.get('https://savon-server-sider-api.herokuapp.com/soaps/customers')
            .then(res => {
                setOrders(res.data);
            })
    }, []);

    console.log(orders);

    // cancel order handler
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to cancel this order?');
        if (proceed) {

            axios.delete(`https://savon-server-sider-api.herokuapp.com/soaps/customers/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Order Cancelled Succesfully');
                        const restOrders = orders.filter(order => order._id !== id);
                        setOrders(restOrders);
                    }
                });
        }
    };


    // update order handler
    const handleAccept = (id, status) => {
        if (status !== 'shipped') {
            const newStatus = { status: 'shipped' };
            axios.put(`https://savon-server-sider-api.herokuapp.com/soaps/customers/${id}`, newStatus)
                .then(res => {
                    if (res.data.acknowledged) {
                        alert('Order updated Succesfully');
                    }

                })
        }
        else {
            alert('Already shipped')
        }

    };

    // if (isLoading) {
    //     return <Box sx={{ flexGrow: 1, my: 5, textAlign: 'center' }} >
    //         <CircularProgress />
    //     </Box>
    // }





    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                No.
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Customer Email
                            </TableCell>
                            <TableCell>
                                Products
                            </TableCell>
                            <TableCell>
                                Order Date
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                            <TableCell>
                                Ship/Cancel
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {!isLoading ? <TableBody>
                        {
                            orders.map(order => <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={order._id}
                            >
                                <TableCell >
                                    {orders.indexOf(order) + 1}
                                </TableCell>
                                <TableCell >
                                    {order.name}
                                </TableCell>
                                <TableCell >
                                    {order.email}
                                </TableCell>
                                <TableCell >
                                    {order.soapTitle}
                                </TableCell>
                                <TableCell >
                                    {order.date}
                                </TableCell>
                                <TableCell >
                                    {order.status}
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={() => handleAccept(order._id, order.status)} aria-label="delete">
                                        <CheckIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(order._id)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                            )}
                        {!orders.length && <TableRow>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 600, m: 2 }}>
                                No orders
                            </Typography>
                        </TableRow>}
                    </TableBody>
                        :
                        <Box sx={{ flexGrow: 1, my: 5, textAlign: 'center' }} >
                            <CircularProgress />
                        </Box>
                    }
                </Table>
            </TableContainer>
        </Paper >
    );
};

export default Orders;