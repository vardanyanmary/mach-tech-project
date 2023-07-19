import { useEffect, useState } from 'react';
import cls from './PopUp.module.scss'
import { useClickOutside } from '../../../hooks/use-click-outside';

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const PopUp: React.FC<PopUpProps> = ({ children, isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        }
    }, [isOpen])

    const handleAnimationEnd = () => {
        if (!isOpen) {
            setIsVisible(false);
        }
    };

    //Click outside
    const handleOutsideClick = () => {
        onClose()
    };

    const ref = useClickOutside(handleOutsideClick)

    return (
        <>
            {isVisible && (
                <div className={cls.popup} onAnimationEnd={handleAnimationEnd}>
                    <div ref={ref} className={cls.content}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}