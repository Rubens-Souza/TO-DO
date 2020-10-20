import React from "react";

import If from "../If/If";
import Checkbox from "../Checkbox/Checkbox";
import { 
    StyledText, 
    StyledMainView,
    StyledTextView,
    StyledDatesTextView,
    StyledTaskTitle 
} from "./styles";

import { EmptyString, isStringBlank } from "../../../shared/utils/functions/StringUtils";

const ItemList = ({
    title=EmptyString, deadline=EmptyString, conclusionDate=EmptyString
}) => {

    return (
        <StyledMainView>
            <Checkbox/>

            <StyledTextView>
                <StyledTaskTitle>
                    {title}
                </StyledTaskTitle>

                <StyledDatesTextView>
                    <If isTrue={!isStringBlank(deadline)}>
                        <StyledText>
                            Deadline: {deadline}
                        </StyledText>
                    </If>

                    <If isTrue={!isStringBlank(conclusionDate)}>
                        <StyledText>
                            Conclusion: {conclusionDate}
                        </StyledText>
                    </If>
                </StyledDatesTextView>
            </StyledTextView>
        </StyledMainView>
    );
};

export default ItemList;