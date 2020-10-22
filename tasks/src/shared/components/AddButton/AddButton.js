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
        <StyledButton activeOpacity={0.7} onPress={onPress} color={themeColor}>
            <StyledText>+</StyledText>
        </StyledButton>
    );
};

export default AddButton;