import { useEffect, useRef } from "react";
import {createPortal} from "react-dom";

function Portal({
    /**
 * Portal
 * 
 * Renders children into a DOM node outside the normal React hierarchy.
 * 
 * This is useful for UI elements that must visually escape parent stacking
 * contexts, such as modals, overlays, dropdowns, and tooltips.
 * 
 * The Portal creates a dedicated DOM element on mount, appends it to the
 * specified target (default: document.body), and removes it on unmount.
 * 
 * @param children - The content to render through the portal.
 * @param target - The DOM node to mount into, default to document.body, but can be in user specified container.
 */
    children, 
    target = document.body
}) { 
    const elementRef = useRef(null);

    if (!elementRef.current) {
        elementRef.current = document.createElement("div");
    }

    useEffect(() => {
        const element = elementRef.current;
        target.appendChild(element);

        return () => {
            target.removeChild(element);
        }
    }, [target]);

    return createPortal(children, elementRef.current);
}

export default Portal;