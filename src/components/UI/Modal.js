import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackModal = (props) => {
    return <div className={classes.backmodal} />
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById("root");

const Modal = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackModal />)}
        </Fragment>
    );
};