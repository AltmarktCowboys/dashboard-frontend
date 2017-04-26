import * as React from "react";
import * as classNames from "classnames";
const theme = require("./LoadingOverlay.scss");

interface LoadingOverlayProps {
    loading: boolean;
}

class LoadingOverlay extends React.Component<LoadingOverlayProps, undefined> {
    public render(): JSX.Element {
        const loadingClass = classNames(theme["loading-screen"], {
            [theme["active"]]: this.props.loading
        });

        return (
            <div className={ theme["loading-overlay"] }>
                <div className={ loadingClass }>
                    <div className={ theme["loading-body"] }>
                        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
                    </div>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default LoadingOverlay;