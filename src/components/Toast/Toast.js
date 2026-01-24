import React, { useEffect } from 'react';
import * as styles from './Toast.module.css';
import Icon from '../Icons/Icon';

const Toast = ({ show, message, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (show && duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    return (
        <div className={`${styles.toast} ${show ? styles.show : ''} ${styles.success}`}>
            <Icon symbol={'check'} />
            <span>{message}</span>
        </div>
    );
};

export default Toast;
