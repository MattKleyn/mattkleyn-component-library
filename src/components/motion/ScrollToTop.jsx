import { useEffect } from "react";
import {useLocation} from "react-router-dom";

/**
 * ScrollToTop
 * 
 * A simple scroll to top component with smooth scroll behaviour as default.
 * 
 * ScrollToTop listens for pathname (URL) changes and activate on change. 
 * 
 * Insert one instance in the main comonent where you want this effect to take place, can be your main.jsx, app.jsx or any other page/section.jsx
 * 
 * @component
 * 
 * @param {Object} props
 * @param {"auto" | "smooth"} [props.scrollBehaviour="smooth"]
 *        Controls the scroll animation behavior.
 * @param {number} [props.scrollTop=0]
 *        Vertical scroll target (default: 0).
 * @param {number} [props.scrollLeft=0]
 *        Horizontal scroll target (default: 0).
 * 
 * @example
 * // Basic usage inside Main with instant navigation.
 * <Main>
 *   <ScrollToTop scrollBehaviour="auto" />
 *   <App />
 * </Main>
 * 
 * @returns {null} This component renders nothing.
 */

function ScrollToTop({
    scrollBehaviour = "smooth",
    scrollTop = 0,
    scrollLeft = 0,
}) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: scrollTop,
            left: scrollLeft,
            behavior: scrollBehaviour,
        });
    }, [pathname, scrollBehaviour, scrollTop, scrollLeft]);

    return null;
}

export default ScrollToTop;