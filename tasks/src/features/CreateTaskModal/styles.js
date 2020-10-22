import styled from "styled-components/native";

import Colors from "../../shared/utils/constants/Colors";

export const StyledText = styled.Text`
    font-size: 15px;
    color: ${(props) => props.color};
`;

export const StyledTextInput = styled.TextInput`
    padding: 3px 6px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${Colors.lightGray};
    color: ${Colors.lightBlack};
`;

export const StyledButtons = styled.TouchableOpacity`
    margin-left: 32px;
`;

export const StyledButtonsView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
    margin-top: auto;
    margin-bottom: 6px;
    margin-right: 6px;
`;