import React from "react";

import {
    StyledButton,
    StyledText
} from "./styles";

import Colors from "../../utils/constants/Colors";

const AddButton = ({
    onPress=null, themeColor=Colors.darkRed
}) => {
    return (
        <StyledButton onPress={onPress} color={themeColor}>
            <StyledText>+</StyledText>
        </StyledButton>
    );
};

export default AddButton;