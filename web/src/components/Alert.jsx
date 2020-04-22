import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
    const {showAlert, alertClass, textAlert} = props;
    return (
        <> {showAlert && (
            <div className={"alert " + alertClass}>
                {textAlert}
            </div>
        )}
        </>
    );
}

Alert.propTypes = {
    alertClass: PropTypes.string.isRequired,
    showAlert: PropTypes.any.isRequired,
    textAlert: PropTypes.string.isRequired
}


export default Alert

