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
    padding: 12px 16px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
    flex: 1;
`;

export const StyledTitleText = styled(StyeldText)`
    font-size: 48px;
    margin-top: 27px;
    margin-bottom: 12px;
`;

export const StyledActualDateText = styled(StyeldText)`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const StyledIconBar = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 3px 3px;
    width: 100%;
`;