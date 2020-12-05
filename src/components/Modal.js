import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const Modal = ({closeModal, header, closeButton, text, actions}) => {

    return(
        <div className="modalOverlay" onClick={ (e)=>( e.target === e.currentTarget? closeModal() : null ) }>
            <div className="modalWindow">
                <div className="modalHeader">
                    <div className="headerText">{ header }</div>
                    <>
                    {closeButton && <FontAwesomeIcon icon={ faTimes } onClick={ closeModal }/>}
                    </>
                </div>
                <div className="modalBody">
                    { text }
                </div>
                <div className="modalFooter">
                    { actions }
                </div>    
            </div>   
        </div>
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func,
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string,
    actions:PropTypes.element
}


export default Modal
