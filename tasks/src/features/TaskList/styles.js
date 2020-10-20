import styled from "styled-components/native";

import Colors from "../../shared/utils/constants/Colors";
import Fonts from "../../shared/utils/constants/Fonts";

const StyeldText = styled.Text`
    color: ${Colors.white};
    font-family: ${Fonts.Lato};
`;

export const StyeldImage = styled.ImageBackground`
    width: 100%;
    height: 32%;
    justify-content: flex-end;
    padding: 12px 16px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
`;

export const StyledTitleText = styled(StyeldText)`
    font-size: 48px;
    margin-bottom: 12px;
`;

export const StyeldActualDateText = styled(StyeldText)`
    font-size: 16px;
    margin-bottom: 16px;
`;