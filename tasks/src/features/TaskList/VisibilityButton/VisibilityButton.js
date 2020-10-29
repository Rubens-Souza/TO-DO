import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import { StyledButton } from "./styles";

import Colors from  "../../../shared/utils/constants/Colors";
import Icons from "../../../shared/utils/constants/Icons";

const VisibilityButton = ({
    isVisible, 
    onPress,
}) => {
    return (
        <StyledButton onPress={onPress}>
            <Icon size={24} name={isVisible ? Icons.Eye : Icons.CuttedEye} color={Colors.white} />
        </StyledButton>
    );
};

VisibilityButton.propTypes = {
    isVisible: PropTypes.bool, 
    onPress: PropTypes.func,
};

VisibilityButton.defaultProps = {
    isVisible: true, 
    onPress: null,
};

export default VisibilityButton;