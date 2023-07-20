import { useEffect, useState } from 'react';
import cls from './PopUp.module.scss';
import { useClickOutside } from '../../../hooks/useClickOutside';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopUp: React.FC<PopUpProps> = ({ children, isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  const handleOutsideClick = () => {
    onClose();
  };

  const handleInsideClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const ref = useClickOutside(handleOutsideClick);

  useEffect(() => {
    // If the pop-up is open, we want to set it to be visible immediately
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    // When the component is mounted, set the initial visibility based on the isOpen prop
    setIsVisible(isOpen);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={cls.popup} onAnimationEnd={handleAnimationEnd}>
          <div ref={ref} className={cls.content} onClick={handleInsideClick}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
