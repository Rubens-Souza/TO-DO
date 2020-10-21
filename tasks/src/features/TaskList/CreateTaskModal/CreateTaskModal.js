import React, { useState } from "react";

import Modal from "../../../shared/components/Modal/Modal";
import Colors from "../../../shared/utils/constants/Colors";
import { EmptyString } from "../../../shared/utils/functions/StringUtils";

import { 
    StyledText, 
    StyledTextInput, 
    StyledButtons, 
    StyledButtonsView, 
} from "./styles";

const IntialState = {
    taskName: EmptyString,
};

const CreateTaskModal = ({
    isOpen=true, onClose=null
}) => {

    const [taskName, setTaskName] = useState(EmptyString);
    const DefaultThemeColor = Colors.darkRed;

    const handleChangeTaskName = (text) => {
        setTaskName(text);
    };

    return (
        <Modal 
            title={"Create Task"} 
            isOpen={isOpen}
            themeColor={DefaultThemeColor}
            onClose={onClose}>

                <StyledTextInput
                    placeholder={"What do you have to do?"}
                    value={taskName}
                    onChangeText={handleChangeTaskName}
                />

                <StyledButtonsView>
                    <StyledButtons onPress={onClose}>
                        <StyledText 
                            color={DefaultThemeColor}>
                            Cancel
                        </StyledText>
                    </StyledButtons>

                    <StyledButtons>
                        <StyledText color={DefaultThemeColor}>
                            Save
                        </StyledText>
                    </StyledButtons>
                </StyledButtonsView>
        </Modal>
    );
};

export default CreateTaskModal;