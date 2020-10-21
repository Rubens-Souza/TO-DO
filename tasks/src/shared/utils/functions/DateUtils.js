import moment from "moment";
import "moment/locale/en-ca";

export const DateLocale = "en-ca";
export const DateFormat = "ddd, MM/D/YYYY";

export const getActualDate = () => {
    return new Date();
};

export const getActualFormattedDate = () => {
    return moment().locale(DateLocale).format(DateFormat);
};

export const formatDate = (date) => {
    if (!(date instanceof Date)) {
        return undefined;
    }

    return moment(date).locale(DateLocale).format(DateFormat);
};