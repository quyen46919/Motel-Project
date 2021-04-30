import React from 'react';
import PropTypes from 'prop-types';
import SettingsPassword from '../SettingsPassword';
import { Box, Container } from '@material-ui/core';

Tab2.propTypes = {
    
};

function Tab2(props) {
    return (
        <div className="tab-2" style={{marginTop: '-35px'}}>
            <Container maxWidth="lg">
                <Box sx={{ pt: 3 }}>
                    <SettingsPassword />
                </Box>
            </Container>
        </div>
    );
}

export default Tab2;