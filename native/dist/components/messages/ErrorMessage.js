var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { Message } from './Message';
import { BugIcon } from '../../assets/BugIcon';
import { Layer } from '../containers/Layer';
var ErrorMessage = /** @class */ (function (_super) {
    __extends(ErrorMessage, _super);
    function ErrorMessage(props) {
        var _this = _super.call(this, props) || this;
        _this.renderErrorIcon = function (color) { return React.createElement(BugIcon, { width: 20, fill: color }); };
        _this.state = { hasError: false, errorMessage: '', errorTitle: '' };
        return _this;
    }
    ErrorMessage.getDerivedStateFromError = function (error) {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    };
    ErrorMessage.prototype.componentDidCatch = function (error, info) {
        var onError = this.props.onError;
        if (onError)
            onError(error, info.componentStack);
    };
    ErrorMessage.prototype.render = function () {
        if (this.state.hasError) {
            return (React.createElement(Message, __assign({ messageType: 'danger', title: this.state.errorTitle, description: this.state.errorMessage, icon: this.renderErrorIcon }, this.props)));
        }
        return React.createElement(Layer, __assign({}, this.props), this.props.children);
    };
    return ErrorMessage;
}(React.Component));
export { ErrorMessage };
//# sourceMappingURL=ErrorMessage.js.map