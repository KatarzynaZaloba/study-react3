import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackModal = (props) => {
    return <div className={classes.backmodal} onClick={props.onClose}/>
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById("root");

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackModal onClose={props.onClose}/>,portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;