import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
export function ModalPortal(_a) {
    var children = _a.children;
    var _b = useState(null), element = _b[0], setElement = _b[1];
    useEffect(function () {
        var element = document.createElement('div');
        if (element && document.body) {
            document.body.appendChild(element);
            setElement(element);
        }
        return function () {
            if (element && document.body) {
                document.body.removeChild(element);
                setElement(null);
            }
        };
    }, []);
    return element && ReactDOM.createPortal(children, element);
}
//# sourceMappingURL=ModalPortal.js.map