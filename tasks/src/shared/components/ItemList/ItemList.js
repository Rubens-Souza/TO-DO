import React, { useState } from "react";

import If from "../If/If";
import Checkbox from "../Checkbox/Checkbox";
import { 
    StyledText, 
    StyledMainView,
    StyledTextView,
    StyledDatesTextView,
    StyledTaskTitle 
} from "./styles";

import { formatDate } from "../../../shared/utils/functions/DateUtils";
import { EmptyString, isStringBlank } from "../../../shared/utils/functions/StringUtils";

const ItemList = ({
    title=EmptyString, deadline=EmptyString, conclusionDate=EmptyString
}) => {

    const [isCompleated, setIsCompleated] = useState(false);

    const getDateString = (date) => {
        if (!(date instanceof Date)) {
            return EmptyString;
        }

        return formatDate(date);
    };

    const compleatTask = () => {
        setIsCompleated(true);
    };

    const resetTask = () => {
        setIsCompleated(false);
    };

    return (
        <StyledMainView>
            <Checkbox onCheck={compleatTask} onUncheck={resetTask}/>

            <StyledTextView>
                <StyledTaskTitle isCompleated={isCompleated}>
                    {title}
                </StyledTaskTitle>

                <StyledDatesTextView>
                    <If isTrue={!isStringBlank(deadline) && !isCompleated}>
                        <StyledText>
                            Deadline: {getDateString(deadline)}
                        </StyledText>
                    </If>

                    <If isTrue={!isStringBlank(conclusionDate) && isCompleated}>
                        <StyledText>
                            Concluded at: {getDateString(conclusionDate)}
                        </StyledText>
                    </If>
                </StyledDatesTextView>
            </StyledTextView>
        </StyledMainView>
    );
};

export default ItemList;