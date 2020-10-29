import React from "react";
import PropTypes from "prop-types";

import {
    StyledButton,
    StyledText
} from "./styles";

import Colors from "../../utils/constants/Colors";

const AddButton = ({
    onPress, 
    themeColor,
}) => {
    return (
        <StyledButton activeOpacity={0.7} onPress={onPress} color={themeColor}>
            <StyledText>+</StyledText>
        </StyledButton>
    );
};

AddButton.propTypes = {
    onPress: PropTypes.func, 
    themeColor: PropTypes.string,
};

AddButton.defaultProps = {
    onPress: null, 
    themeColor: Colors.darkRed,
};

export default AddButton;