import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

const Checkbox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    border-style: solid;
    border-width: 1px;
    border-color: ${Colors.lightGray};
    border-radius: 50px;
`;

export const StyledUncheckedCheckbox = styled(Checkbox)`
    background-color: ${Colors.white};
`;

export const StyledCheckedChekbox = styled(Checkbox)`
    background-color: ${Colors.checkboxGreen};
    border-color: ${Colors.white};
    justify-content: center;
    align-items: center;
`;