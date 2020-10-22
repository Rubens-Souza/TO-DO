import React, { useState } from "react";

import Modal from "../../shared/components/Modal/Modal";
import Colors from "../../shared/utils/constants/Colors";
import { EmptyString } from "../../shared/utils/functions/StringUtils";

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
    isOpen=true, onClose=null, themeColor=Colors.darkRed
}) => {

    const [taskName, setTaskName] = useState(IntialState.taskName);

    const handleChangeTaskName = (text) => {
        setTaskName(text);
    };

    return (
        <Modal 
            title={"Create Task"} 
            isOpen={isOpen}
            themeColor={themeColor}
            onClose={onClose}>

                <StyledTextInput
                    placeholder={"What do you have to do?"}
                    value={taskName}
                    onChangeText={handleChangeTaskName}
                />

                <StyledButtonsView>
                    <StyledButtons onPress={onClose}>
                        <StyledText 
                            color={themeColor}>
                            Cancel
                        </StyledText>
                    </StyledButtons>

                    <StyledButtons>
                        <StyledText color={themeColor}>
                            Save
                        </StyledText>
                    </StyledButtons>
                </StyledButtonsView>
        </Modal>
    );
};

export default CreateTaskModal;