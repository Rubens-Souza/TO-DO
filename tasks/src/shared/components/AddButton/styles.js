import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

export const StyledButton = styled.TouchableOpacity`
    background-color: ${(props) => props.color};
    position: fixed;
    min-height: 25px;
    min-width: 25px;
    padding: 6px 6px;
`;

export const StyledText = styled.Text`
    color: ${Colors.white};
`;