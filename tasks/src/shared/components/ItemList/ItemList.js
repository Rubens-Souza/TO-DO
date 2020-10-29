import React from "react";
import PropTypes from "prop-types";

import If from "../If/If";
import Checkbox from "../Checkbox/Checkbox";
import ExclusionButton from "./ExclusionButton/ExclusionButton";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { 
    StyledText, 
    StyledMainView,
    StyledTextView,
    StyledTaskTitle 
} from "./styles";

import { formatStringDate } from "../../../shared/utils/functions/DateUtils";
import { EmptyString, getDefaultIfBlank, isStringBlank } from "../../../shared/utils/functions/StringUtils";
import { hasSetFunctionProperty } from "../../../shared/utils/functions/ComponentsUtils";
import ExclusionButtonDirections from "../../../shared/utils/constants/ExclusionButtonDirections";

import Task from "../../dtos/Task";

const ItemList = ({
    taskData,
    onTaskConclusion,
    onTaskReseted,
    onExclusion,
}) => {

    const task = taskData;

    const getDateString = (date) => {
        return getDefaultIfBlank(formatStringDate(date), EmptyString);
    };

    const compleatTask = () => {
        if (hasSetFunctionProperty(onTaskConclusion)) {
            onTaskConclusion(task.id);
        }
    };

    const resetTask = () => {
        if (hasSetFunctionProperty(onTaskReseted)) {
            onTaskReseted(task.id);
        }
    };

    const getRightExclusionButton = () => {
        return (
            <ExclusionButton onPress={handleExclusion}/>
        );
    };

    const getLeftExclusionButton = () => {
        return (
            <ExclusionButton direction={ExclusionButtonDirections.horizontal}/>
        );
    };

    const handleExclusion = () => {
        if (hasSetFunctionProperty(onExclusion)) {
            onExclusion(task.id);
        }
    };

    return (
        <Swipeable 
            renderRightActions={getRightExclusionButton} 
            renderLeftActions={getLeftExclusionButton}
            onSwipeableLeftOpen={handleExclusion}
            >

            <StyledMainView>
                <Checkbox value={task.concluded} onCheck={compleatTask} onUncheck={resetTask}/>

                <StyledTextView>
                    <StyledTaskTitle isCompleated={task.concluded}>
                        {task.title}
                    </StyledTaskTitle>

                    <If isTrue={!isStringBlank(task.deadline) && !task.concluded}>
                        <StyledText>
                            Deadline: {getDateString(task.deadline)}
                        </StyledText>
                    </If>

                    <If isTrue={!isStringBlank(task.conclusion) && task.concluded}>
                        <StyledText>
                            Concluded at: {getDateString(task.conclusion)}
                        </StyledText>
                    </If>
                </StyledTextView>
            </StyledMainView>
        </Swipeable>
    );
};

ItemList.propTypes = {
    taskData: PropTypes.object.isRequired,
    onTaskConclusion: PropTypes.func,
    onTaskReseted: PropTypes.func,
    onExclusion: PropTypes.func,
};

ItemList.defaultProps = {
    taskData: Task.EmptyTask,
    onTaskConclusion: null,
    onTaskReseted: null,
    onExclusion: null
};

export default ItemList;