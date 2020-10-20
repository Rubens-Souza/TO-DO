import React from "react";
import { View } from "react-native";

import { getActualFormattedDate } from "../../shared/utils/functions/DateUtils";

import { 
    StyeldImage, 
    StyledSafeAreaView, 
    StyledTitleText, 
    StyeldActualDateText 
} from "./styles";

import ItemList from "../../shared/components/ItemList/ItemList";
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
            <ItemList title={"Capturar pokemons"} deadline={new Date("2020-02-20")} conclusionDate={new Date("2020-02-21")}/>
        </StyledSafeAreaView>
    );
};

export default TaskList;