import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

MotelSkeleton.propTypes = {
    length: PropTypes.number,
};
MotelSkeleton.defaultProps = {
    length: 16,
};

function MotelSkeleton({length}) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x,index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
                        <Box padding={1}>
                            <Skeleton variant="rect" width={310} height={200}/>
                            <Skeleton width={310}/>
                            <Skeleton width="60%"/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MotelSkeleton;