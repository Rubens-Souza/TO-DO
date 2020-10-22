import styled from "styled-components/native";

import Colors from "../../../utils/constants/Colors";
import ExclusionButtonDirections from "../../../utils/constants/ExclusionButtonDirections";

export const StyledButton = styled.TouchableOpacity`
position: relative;
    background-color: ${Colors.red};
    flex-direction: ${(props) => props.direction};
    justify-content: space-evenly;
    align-items: center;
    padding: 3px 3px;
    width: ${(props) => props.direction === ExclusionButtonDirections.horizontal ? "100px" : "75px" };
`;

export const StyledButtonText = styled.Text`
    color: ${Colors.white};
`;