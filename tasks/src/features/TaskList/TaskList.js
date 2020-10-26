import React, { useState, useMemo } from "react";
import { FlatList } from "react-native";

import VisibilityButton from "./VisibilityButton/VisibilityButton";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal";
import AddButton from "../../shared/components/AddButton/AddButton";
import ItemList from "../../shared/components/ItemList/ItemList";
import imgToday from "../../../assets/imgs/today.jpg";

import { 
    StyeldImage, 
    StyledSafeAreaView, 
    StyledTitleText, 
    StyledActualDateText, 
    StyledIconBar 
} from "./styles";

import AsyncStorage from "@react-native-community/async-storage";

import { getActualFormattedDate, getActualDate } from "../../shared/utils/functions/DateUtils";

const TaskListInitialState = {
    tasks: new Array(0),
    displayTasks: new Array(0),
    modalCreateTaskIsOpen: false,
    concludedTasksIsVisible: true,
};

const TaskList = () => {

    const [tasks, setTasks] = useState(TaskListInitialState.tasks);
    const [displayTasks, setDisplayTasks] = useState(TaskListInitialState.displayTasks);
    const [modalCreateTaskIsOpen, setModalCreateTaskIsOpen] = useState(TaskListInitialState.modalCreateTaskIsOpen);
    const [concludedTasksIsVisible, setConcludedTasksIsVisible] = useState(TaskListInitialState.concludedTasksIsVisible);
    const [isLoading, setIsLoading] = useState(true);

    const State_Storaged_Item_Name = "TaskListState";
    
    const createItemList = (task) => {
        if (!task) {
            return null;
        }

        return (
            <ItemList 
                taskData={task}
                onTaskConclusion={handleTaskConclusion}
                onTaskReseted={handleTaskReseted}
                onExclusion={handleTaskExclusion}
            />
        );
    };

    const handleTaskConclusion = (id) => {
        const updatedTasks = [...tasks];

        let concludedTaskIndex = updatedTasks.findIndex(task => task.id === id);
        updatedTasks[concludedTaskIndex].concluded = true;
        updatedTasks[concludedTaskIndex].conclusion = getActualDate();

        setTasks(updatedTasks);
    };

    const handleTaskReseted = (id) => {
        const updatedTasks = [...tasks];

        let resetedTaskIndex = updatedTasks.findIndex(task => task.id === id);
        updatedTasks[resetedTaskIndex].concluded = false;
        updatedTasks[resetedTaskIndex].conclusion = null;

        setTasks(updatedTasks);
    };

    const handleTaskExclusion = (id) => {
        const updatedTasks = [...tasks];

        const deletedTaskIndex = updatedTasks.findIndex(task => task.id === id);
        updatedTasks.splice(deletedTaskIndex, 1);

        setTasks(updatedTasks);
    };

    const closeCreateTaskModal = () => {
        setModalCreateTaskIsOpen(false);
    };

    const openCreateTaskModal = () => {
        setModalCreateTaskIsOpen(true);
    };

    const handleCreateTaskSave = (createdTask) => {
        setModalCreateTaskIsOpen(false);

        const updatedTasks = [...tasks];
        updatedTasks.unshift(createdTask);
        
        setTasks(updatedTasks);
    };

    const handleVisibilityChange = () => {
        setConcludedTasksIsVisible(!concludedTasksIsVisible);
    };

    const handleAnyTaskListChange = () => {
        updateDisplayTasks();
        saveActualState();
    };

    const handleTaskListInitialLoad = () => {
        loadLastState()
            .catch(() => {
                resetToDefaultState();
            });
    };

    const updateDisplayTasks = () => {
        let taskList = [... tasks];
        
        taskList = filterConcludedTasks(taskList);
        taskList = sortConcludedTask(taskList);

        setDisplayTasks(taskList);
    };

    const sortConcludedTask = (taskList) => {
        let ordenatedTasks = [... taskList];

        ordenatedTasks = ordenatedTasks.sort((task1, task2) => {
            return task1.concluded - task2.concluded;
        });

        return ordenatedTasks;
    };

    const filterConcludedTasks = (taskList) => {
        let filteredTasks = [... taskList];

        if (!concludedTasksIsVisible) {
            filteredTasks = filteredTasks.filter((task) => {
                return !task.concluded;
            });
        }

        return filteredTasks;
    };

    const saveActualState = () => {
        if (isLoading) {
            return;
        }

        const actualState = {
            tasks: tasks,
            displayTasks: displayTasks,
            modalCreateTaskIsOpen: modalCreateTaskIsOpen,
            concludedTasksIsVisible: concludedTasksIsVisible
        };

        AsyncStorage.setItem(State_Storaged_Item_Name, JSON.stringify(actualState));
    };

    const loadLastState = async () => {
        let lastState = await AsyncStorage.getItem(State_Storaged_Item_Name);
        lastState = JSON.parse(lastState);

        configStateTo(lastState);
        setIsLoading(false);
    };

    const configStateTo = (state) => {
        if (!state) {
            resetToDefaultState();
        }

        setTasks(state.tasks);
        setModalCreateTaskIsOpen(state.modalCreateTaskIsOpen);
        setConcludedTasksIsVisible(state.concludedTasksIsVisible);
        setDisplayTasks(state.displayTasks);
    };

    const resetToDefaultState = () => {
        setTasks(TaskListInitialState.tasks);
        setModalCreateTaskIsOpen(TaskListInitialState.modalCreateTaskIsOpen);
        setConcludedTasksIsVisible(TaskListInitialState.concludedTasksIsVisible);
        setDisplayTasks(TaskListInitialState.displayTasks);
        setIsLoading(false);
    };

    useMemo(handleTaskListInitialLoad, []);
    useMemo(handleAnyTaskListChange, [tasks]);
    useMemo(handleAnyTaskListChange, [concludedTasksIsVisible]);
    useMemo(updateDisplayTasks, [isLoading]);

    return (
        <StyledSafeAreaView>
            <CreateTaskModal 
                isOpen={modalCreateTaskIsOpen} 
                onClose={closeCreateTaskModal}
                onSave={handleCreateTaskSave}
            />

            <StyeldImage source={imgToday}>
                <StyledIconBar>
                    <VisibilityButton 
                        isVisible={concludedTasksIsVisible} 
                        onPress={handleVisibilityChange}
                    />
                </StyledIconBar>
                <StyledTitleText>
                    Today
                </StyledTitleText>
                <StyledActualDateText>
                    {getActualFormattedDate()}
                </StyledActualDateText>
            </StyeldImage>

            <FlatList 
                data={displayTasks}
                extraData={displayTasks}
                keyExtractor={task => task.id}
                renderItem={({item: task}) => {
                    return createItemList(task);
                }}
            />

            <AddButton onPress={openCreateTaskModal}/>
        </StyledSafeAreaView>
    );
};

export default TaskList;