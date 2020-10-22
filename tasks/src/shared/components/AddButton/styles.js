import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

export const StyledButton = styled.TouchableOpacity`
    background-color: ${(props) => props.color};
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 30px;
    bottom: 30px;
    height: 45px;
    width: 45px;
    padding-bottom: 3px;
    border-radius: 50px;
`;

export const StyledText = styled.Text`
    margin: 0px 0px;
    font-size: 39px;
    text-align: center;
    color: ${Colors.white};
`;