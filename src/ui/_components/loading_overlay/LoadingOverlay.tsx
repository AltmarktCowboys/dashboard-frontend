import * as React from "react";
import * as classNames from "classnames";
import { PacmanLoader } from "halogen";
const theme = require("./LoadingOverlay.scss");

interface LoadingOverlayProps {
    loading: boolean;
    icon?: string;
}

class LoadingOverlay extends React.Component<LoadingOverlayProps, undefined> {
    public render(): JSX.Element {
        const loadingClass = classNames(theme["loading-screen"], {
            [theme["active"]]: this.props.loading
        });

        let icon = (
            <PacmanLoader color="#4DAF7C" />
        );

        if (this.props.icon != null) {
            icon = (
                <i className={ classNames("fa fa-3x fa-fw", this.props.icon) } style={ { color: "#888" } } />
            );
        }

        return (
            <div className={ theme["loading-overlay"] }>
                <div className={ loadingClass }>
                    <div className={ theme["loading-body"] }>
                        { icon }
                    </div>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default LoadingOverlay;