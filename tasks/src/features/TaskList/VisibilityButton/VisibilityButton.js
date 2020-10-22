import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { StyledButton } from "./styles";

import Colors from  "../../../shared/utils/constants/Colors";
import Icons from "../../../shared/utils/constants/Icons";

const VisibilityButton = ({
    isVisible=true, onPress=null
}) => {
    return (
        <StyledButton onPress={onPress}>
            <Icon size={24} name={isVisible ? Icons.Eye : Icons.CuttedEye} color={Colors.white} />
        </StyledButton>
    );
};

export default VisibilityButton;