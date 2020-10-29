import React, { useState } from "react";
import PropTypes from "prop-types";

import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";
import Icon from "react-native-vector-icons/FontAwesome";

import Icons from "../../utils/constants/Icons";
import Colors from "../../utils/constants/Colors";

import { 
    StyledCheckedChekbox, 
    StyledUncheckedCheckbox 
} from "./styles";

const Checkbox = ({
    value, 
    onCheck, 
    onUncheck,
}) => {

    const [checked, setChecked] = useState(value);

    const handlePress = () => {
        let actualValue = !checked;
        setChecked(actualValue);

        if (actualValue && hasSetFunctionProperty(onCheck)) {
            onCheck();
        }
        else if (!actualValue && hasSetFunctionProperty(onUncheck)) {
            onUncheck();
        }
    };

    const getCheckedCheckbox = () => {
        return (
            <StyledCheckedChekbox onPress={handlePress}>
                <Icon name={Icons.Check} size={Icons.DefaultIconSize} color={Colors.white}/>
            </StyledCheckedChekbox>
        );
    };

    const getUncheckedCheckbox = () => {
        return (
            <StyledUncheckedCheckbox onPress={handlePress}/>
        );
    };

    const getCheckbox = () => {
        return checked ? getCheckedCheckbox() : getUncheckedCheckbox();
    };

    return getCheckbox();
};

Checkbox.propTypes = {
    value: PropTypes.bool, 
    onCheck: PropTypes.func, 
    onUncheck: PropTypes.func,
};

Checkbox.defaultProps = {
    value: false, 
    onCheck: null, 
    onUncheck: null,
};

export default Checkbox;