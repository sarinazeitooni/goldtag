import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from "react";
import useViewPort from "../../../../customIsMobileHook/useViewPort";
function Address({id}){
    const isMobile = useViewPort();
    return(
        <React.Fragment>
            {!isMobile ?<div className='address-container'><Breadcrumbs aria-label="breadcrumb">
                <Link className='address' color="inherit" href="/">{id.address.home}</Link>
                <Link className='address' color="inherit" href="/">{id.address.category}</Link>
                <Link className='address' color="inherit" href="/">{id.address.secondCategory}</Link>
                <Typography color="textPrimary">{id.address.product}</Typography>
            </Breadcrumbs></div>  :''}
        </React.Fragment>
    )
}
export default Address;