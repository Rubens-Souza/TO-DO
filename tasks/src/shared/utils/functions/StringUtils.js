export const EmptyString = '';
export const Space = ' ';

export const isStringEmpty = (string) => {
    return !string || string === EmptyString;
};

export const isStringBlank = (string) => {
    return isStringEmpty(string) || string  === Space;
};

export const getDefaultIfEmpty = (string, defaultValue=EmptyString) => {
    return isStringEmpty(string) ? defaultValue : string;
};

export const getDefaultIfBlank = (string, defaultValue=EmptyString) => {
    return isStringBlank(string) ? defaultValue : string;
};