import React, { useState } from "react";

import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";
import Icon from "react-native-vector-icons/FontAwesome";

import Icons from "../../utils/constants/Icons";
import Colors from "../../utils/constants/Colors";

import { 
    StyledCheckedChekbox, 
    StyledUncheckedCheckbox 
} from "./styles";

const Checkbox = ({
    value=false, onCheck=null, onUncheck=null
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

export default Checkbox;