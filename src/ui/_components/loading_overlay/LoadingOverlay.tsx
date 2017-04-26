import * as React from "react";
import * as classNames from "classnames";
import { PacmanLoader } from "halogen";
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
                        <PacmanLoader color="#4DAF7C" />
                    </div>
                </div>
                { this.props.children }
            </div>
        );
    }
}

export default LoadingOverlay;