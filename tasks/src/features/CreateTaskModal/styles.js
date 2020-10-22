import styled from "styled-components/native";
import { StyledCommumTextInput } from "../../shared/CommumStyles/CommumStyles";

import Colors from "../../shared/utils/constants/Colors";

export const StyledText = styled.Text`
    font-size: 15px;
    color: ${(props) => props.disabled ? Colors.lightGray :  props.color};
`;

export const StyledTextInput = styled(StyledCommumTextInput)`
    margin-bottom: 6px;
`;

export const StyledButtons = styled.TouchableOpacity`
    margin-left: 32px;
`;

export const StyledButtonsView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
    margin-top: 10px;
    margin-bottom: 6px;
    margin-right: 6px;
`;