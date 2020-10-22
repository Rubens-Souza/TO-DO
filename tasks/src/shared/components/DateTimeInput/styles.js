import styled from "styled-components/native";
import { StyledCommumTextInput } from "../../CommumStyles/CommumStyles";

import Colors from "../../../shared/utils/constants/Colors";

export const DateTimeFakeInput = styled(StyledCommumTextInput)`
    border: none;
    border-bottom-color: ${Colors.lightGray};
    border-bottom-width: 1px;
    font-size: 15px;
`;