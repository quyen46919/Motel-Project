import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

NotFound.propTypes = {
    
};

function NotFound(props) {
    return (
        <div className="not-found">
            {/* <div className="not-found__img--block">
            </div> */}
            <p>ლ(ﾟдﾟლ)</p>
            <p>Page not found</p>
        </div>
    );
}

export default NotFound;