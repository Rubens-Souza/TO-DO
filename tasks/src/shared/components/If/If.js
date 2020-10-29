import PropTypes from "prop-types";

const If = ({
    isTrue, 
    children
}) => {

    if (isTrue) {
        return children;
    }

    return null;
};

If.propTypes = {
    isTrue: PropTypes.bool.isRequired,
};

export default If;