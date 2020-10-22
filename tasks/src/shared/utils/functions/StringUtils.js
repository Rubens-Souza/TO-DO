export const EmptyString = '';
export const Space = ' ';

export const parseString = (object) => {
    return String(object);
};

export const isStringEmpty = (string) => {
    return !string || string === EmptyString;
};

export const isStringBlank = (string) => {
    return !string || isStringEmpty(parseString(string).trim());
};

export const getDefaultIfEmpty = (string, defaultValue=EmptyString) => {
    return isStringEmpty(string) ? defaultValue : string;
};

export const getDefaultIfBlank = (string, defaultValue=EmptyString) => {
    return isStringBlank(string) ? defaultValue : string;
};