import React from "react";

import Modal from "../../../shared/components/Modal/Modal";
import Colors from "../../../shared/utils/constants/Colors";

import { 
    StyledText, 
    StyledTextInput, 
    StyledButtons, 
    StyledButtonsView, 
} from "./styles";

const CreateTaskModal = ({
    onClose=null
}) => {

    const DefaultThemeColor = Colors.darkRed;

    return (
        <Modal 
            title={"Create Task"} 
            isOpen={true}
            themeColor={DefaultThemeColor}
            onClose={onClose}>

                <StyledTextInput
                    placeholder={"What do you have to do?"}
                />

                <StyledButtonsView>
                    <StyledButtons>
                        <StyledText color={DefaultThemeColor}>
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