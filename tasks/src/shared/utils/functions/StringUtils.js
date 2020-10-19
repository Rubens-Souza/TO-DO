export const EmptyString = '';
export const Space = ' ';

export const getDefaultIfEmpty = (string, defaultValue=EmptyString) => {
    return (!string || string === EmptyString) ? defaultValue : string;
};

export const getDefaultIfBlank = (string, defaultValue=EmptyString) => {
    return (!string || string === Space || string === EmptyString) ? defaultValue : string;
};