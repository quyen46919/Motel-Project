import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Box, Container, Grid } from '@material-ui/core';
import AccountProfileDetails from '../AccountProfileDetails';

Tab1.propTypes = {
    
};

function Tab1(props) {
    return (
        <div className="tab-1">
            <Container maxWidth="lg">
                <Grid
                item
                lg={8}
                md={8}
                xs={8}
                >
                    <AccountProfileDetails />
                </Grid>
            </Container>
        </div>
    );
}

export default Tab1;