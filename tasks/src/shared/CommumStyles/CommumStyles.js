import styled from "styled-components/native";

import Colors from "../utils/constants/Colors";

export const StyledCommumTextInput = styled.TextInput`
    padding: 3px 6px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: ${Colors.lightGray};
    color: ${Colors.lightBlack};
`;