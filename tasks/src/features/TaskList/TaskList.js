import React from "react";
import { View } from "react-native";

import { getActualFormattedDate } from "../../shared/utils/functions/DateUtils";

import { 
    StyeldText, 
    StyeldImage, 
    StyledSafeAreaView, 
    StyledTitleText, 
    StyeldActualDateText 
} from "./styles";

import imgToday from "../../../assets/imgs/today.jpg";

const TaskList = () => {

    const actualDate = getActualFormattedDate();

    return (
        <StyledSafeAreaView>
            <StyeldImage source={imgToday}>
                <View>
                    <StyledTitleText>
                        Today
                    </StyledTitleText>
                    <StyeldActualDateText>
                        {actualDate}
                    </StyeldActualDateText>
                </View>
            </StyeldImage>
            <StyeldText>
                Hello World
            </StyeldText>
        </StyledSafeAreaView>
    );
};

export default TaskList;