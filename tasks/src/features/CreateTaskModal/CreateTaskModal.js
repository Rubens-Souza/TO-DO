import React, { useState } from "react";

import Modal from "../../shared/components/Modal/Modal";
import DateTimeInput from "../../shared/components/DateTimeInput/DateTimeInput";

import { 
    StyledText, 
    StyledTextInput, 
    StyledButtons, 
    StyledButtonsView, 
} from "./styles";

import Colors from "../../shared/utils/constants/Colors";
import DateTimePickerModes from "../../shared/utils/constants/DateTimePickerModes";
import { getActualDate } from "../../shared/utils/functions/DateUtils";
import { EmptyString, isStringBlank } from "../../shared/utils/functions/StringUtils";
import { hasSetFunctionProperty } from "../../shared/utils/functions/ComponentsUtils";

import Task from "../../shared/dtos/Task";

const IntialState = {
    taskName: EmptyString,
    intialDate: getActualDate(),
    deadlineDateCalendarIsOpen: false,
};

const CreateTaskModal = ({
    isOpen=true, 
    onClose=null, 
    onSave=null,
    themeColor=Colors.darkRed
}) => {

    const [taskName, setTaskName] = useState(IntialState.taskName);
    const [taskDeadlineDate, setTaskDeadLineDate] = useState(IntialState.intialDate);

    const handleChangeTaskName = (text) => {
        setTaskName(text);
    };

    const handleDeadlineDateInput = (evt, date) => {
        setTaskDeadLineDate(date);
    };

    const handleSave = () => {
        let createdTask = new Task(taskName, taskDeadlineDate);
        resetToOriginalState();

        if (hasSetFunctionProperty(onSave)) {
            onSave(createdTask);
        }
    };
    
    const resetToOriginalState = () => {
        setTaskName(IntialState.taskName);
        setTaskDeadLineDate(IntialState.intialDate);
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

                <DateTimeInput
                    mode={DateTimePickerModes.dateOnly}
                    onChange={handleDeadlineDateInput}
                />

                <StyledButtonsView>
                    <StyledButtons onPress={onClose}>
                        <StyledText color={themeColor} disabled={false}>
                            Cancel
                        </StyledText>
                    </StyledButtons>

                    <StyledButtons onPress={handleSave} disabled={isStringBlank(taskName)}>
                        <StyledText color={themeColor} disabled={isStringBlank(taskName)}>
                            Save
                        </StyledText>
                    </StyledButtons>
                </StyledButtonsView>
        </Modal>
    );
};

export default CreateTaskModal;