import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { 
    StyledButton,
    StyledButtonText
} from "./styles";

import Icons from "../../../utils/constants/Icons";
import Colors from "../../../utils/constants/Colors";
import ExclusionButtonDirections from "../../../utils/constants/ExclusionButtonDirections";

const ExclusionButton = ({
    onPress=null,
    direction=ExclusionButtonDirections.vertical
}) => {
    return (
        <StyledButton onPress={onPress} direction={direction}>
            <Icon name={Icons.Trash} size={24} color={Colors.white}/>
            <StyledButtonText>
                Remove
            </StyledButtonText>
        </StyledButton>
    );
};

export default ExclusionButton;