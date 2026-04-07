import Portal from '../layouts/Portal';
import { useEffect } from 'react';

function ModalRoot({
    isOpen,
    onClose,
    portalTarget=document.body,
    className='',
    children,
    ...props
}) {
    if (!isOpen) return null;
    console.log(isOpen);

    //close with escape key
    useEffect(() => {
        function handleKeyDown(e) {
            console.log(e);
            if (e.key == "Escape") {
                onClose?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {window.removeEventListener("keydown", handleKeyDown)};
    }, [onClose]);

    //scroll lock when open
    useEffect(() => {
        const prevOverflowValue = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {document.body.style.overflow = prevOverflowValue};
    }, []);

    //close on background click
    function handleBackdropClick() {
        onClose?.();
    }

    //no close on content click
    function handleContentClick(e) {
        e.stopPropagation();
    }

    return (
        <Portal target={portalTarget}>
            <div onClick={handleBackdropClick}
                className={`modal_backdrop ${className}`}
                role='presentation'
                {...props}
            >
                <div onClick={handleContentClick}
                className={`modal_content_container`}
                role='dialog'
                aria-modal='true'
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default ModalRoot;