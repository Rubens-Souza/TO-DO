import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

export const StyledModal = styled.Modal`
`;

export const StyledModalView = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const StyledModalOverlay = styled.TouchableWithoutFeedback`
`;

export const StyledModalOverlayBackground = styled.View`
    position: absolute;
    background-color: ${Colors.black};
    opacity: 0.60;
    width: 100%;
    height: 100%;
`;

export const StyledModalContentView = styled.View`
    background-color: ${Colors.white};
    min-width: 90%;
    min-height: 160px;
    border-radius: 4px;
`;

export const StyledTitle = styled.Text`
    color: ${Colors.white};
    background-color: ${(props) => props.color};
    text-align: center;
    font-size: 21px;
    padding: 9px 9px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const StyledContent = styled.View`
    margin: 9px 9px;
`;