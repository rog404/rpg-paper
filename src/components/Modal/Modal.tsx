import { ReactNode } from 'react';
import './Modal.css';
import { FaRegTimesCircle } from 'react-icons/fa';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

function Modal({
  isOpen,
  onClose,
  title = 'Modal',
  children,
  className,
}: Props) {
  return (
    <>
      {isOpen && (
        <>
          <div className="modal--background">
            <div className="modal">
              {title && <h3 className="modal--header">{title}</h3>}
              <div className={className}>{children}</div>
            </div>
            <a onClick={onClose} className="modal--closeButton">
              <FaRegTimesCircle className="modal--icon" />
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
