import moment from "moment";
import "moment/locale/en-ca";

export const DateLocale = "en-ca";
export const DateFormat = "ddd, MM/D/YYYY";

export const getActualFormattedDate = () => {
    return moment().locale(DateLocale).format(DateFormat);
};

