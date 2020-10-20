const If = ({
    isTrue=true, children
}) => {

    if (isTrue) {
        return children;
    }

    return null;
};

export default If;