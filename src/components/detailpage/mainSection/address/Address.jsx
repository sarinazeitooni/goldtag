import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {BrowserView} from 'react-device-detect';
import React from "react";
function Address({id}){
    return(
        <BrowserView className='address-container'>
            <Breadcrumbs aria-label="breadcrumb">
                <Link className='address' color="inherit" href="/">{id.address.home}</Link>
                <Link className='address' color="inherit" href="/">{id.address.category}</Link>
                <Link className='address' color="inherit" href="/">{id.address.secondCategory}</Link>
                <Typography color="textPrimary">{id.address.product}</Typography>
            </Breadcrumbs>
        </BrowserView>
    )
};
export default Address;