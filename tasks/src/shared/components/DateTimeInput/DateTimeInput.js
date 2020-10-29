import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import If from "../If/If";

import {
    DateTimeFakeInput
} from "./styles";

import OperatingSystemTypes from "../../utils/constants/OperatingSystemTypes";
import DateTimePickerModes from "../../utils/constants/DateTimePickerModes";
import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";
import { getActualDate, formatDate, isDateValid } from "../../utils/functions/DateUtils";
import { EmptyString } from "../../utils/functions/StringUtils";

const InitialState = {
    initialDate: getActualDate(),
    initialCalendarIsOpen: false,
};

const DateTimeInput = ({
    onChange, 
    onCalendarOpen,
    mode,
    placeholder,
}) => {

    const [date, setDate] = useState(InitialState.initialDate);
    const [calendarIsOpen, setCalendarIsOpen] = useState(InitialState.initialCalendarIsOpen);

    const handleDateTimeChange = (evt, inputedDate) => {
        setCalendarIsOpen(false);
        if (isDateValid(inputedDate)) {
            setDate(inputedDate);
        }

        if (hasSetFunctionProperty(onChange)) {
            onChange(evt, inputedDate);
        }
    };

    const handleCalendarOpen = () => {
        setCalendarIsOpen(true);

        if (hasSetFunctionProperty(onCalendarOpen)) {
            onCalendarOpen();
        }
    };

    const getDateTimePicker = () => {
        let dateTimePicker = (
            <DateTimePicker
                value={date}
                onChange={handleDateTimeChange}
                mode={mode}
            />
        );

        if (Platform.OS === OperatingSystemTypes.android) {
            dateTimePicker = (
                <View>
                    <TouchableOpacity onPress={handleCalendarOpen}>
                        <DateTimeFakeInput
                            placeholder={placeholder}
                            value={formatDate(date)}
                            editable={false}
                        />
                        <If isTrue={calendarIsOpen}>
                            {dateTimePicker}
                        </If>
                    </TouchableOpacity>
                </View>
            );
        }

        return dateTimePicker;
    };

    return getDateTimePicker();
};

DateTimeInput.propTypes = {
    onChange: PropTypes.func, 
    onCalendarOpen: PropTypes.func,
    mode: PropTypes.string,
    placeholder: PropTypes.string,
};

DateTimeInput.defaultProps = {
    onChange: null, 
    onCalendarOpen: null,
    mode: DateTimePickerModes.dateAndTime,
    placeholder: EmptyString,
};

export default DateTimeInput;