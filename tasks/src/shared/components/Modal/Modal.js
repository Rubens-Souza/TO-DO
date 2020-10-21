import React from "react";

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
    title=EmptyString,
    isOpen=false,
    onClose=null,
    themeColor=Colors.darkRed,
    animationType=ModalAnimationsTypes.slide,
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

export default Modal;