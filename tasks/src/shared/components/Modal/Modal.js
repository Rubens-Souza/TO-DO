import React from "react";
import PropTypes from "prop-types";

import { 
    StyledModal, 
    StyledModalOverlay, 
    StyledModalOverlayBackground, 
    StyledModalView, 
    StyledModalContentView, 
    StyledTitle, 
    StyledContent  
} from "./styles";

import Colors from "../../utils/constants/Colors";
import ModalAnimationsTypes from "../../utils/constants/ModalAnimationsTypes";
import { EmptyString } from "../../utils/functions/StringUtils";

const Modal = ({
    title,
    isOpen,
    onClose,
    themeColor,
    animationType,
    children
}) => {
    
    return (
        <StyledModal 
            visible={isOpen}
            transparent={true}
            animationType={animationType}
            onRequestClose={onClose}>

            <StyledModalOverlay onPress={onClose}>
                <StyledModalOverlayBackground />
            </StyledModalOverlay>

            <StyledModalView>
                <StyledModalContentView>
                    <StyledTitle color={themeColor}>
                        {title}
                    </StyledTitle>

                    <StyledContent>
                        {children}
                    </StyledContent>
                </StyledModalContentView>
            </StyledModalView>
        </StyledModal>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    themeColor: PropTypes.string,
    animationType: PropTypes.string,
};

Modal.defaultProps = {
    title: EmptyString,
    isOpen: false,
    onClose: null,
    themeColor: Colors.darkRed,
    animationType: ModalAnimationsTypes.slide,
};

export default Modal;