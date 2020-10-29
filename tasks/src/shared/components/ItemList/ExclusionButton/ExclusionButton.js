import React from "react";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

import { 
    StyledButton,
    StyledButtonText
} from "./styles";

import Icons from "../../../utils/constants/Icons";
import Colors from "../../../utils/constants/Colors";
import ExclusionButtonDirections from "../../../utils/constants/ExclusionButtonDirections";

const ExclusionButton = ({
    onPress,
    direction,
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

ExclusionButton.propTypes = {
    onPress: PropTypes.func,
    direction: PropTypes.string,
};

ExclusionButton.defaultProps = {
    onPress: null,
    direction: ExclusionButtonDirections.vertical,
};

export default ExclusionButton;