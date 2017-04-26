import * as React from "react";
import * as classNames from "classnames";
const theme = require("./Sidebar.scss");

interface ActionProps {
    icon: string;
    onClick: () => void;
}

class Action extends React.Component<ActionProps, null> {
    public render() {
        return (
            <span {...this.props} className={ theme["action"] } onClick={ () => this.props.onClick() }>
                <i className={ classNames(this.props.icon, "fa fa-2x") } />
            </span>
        );
    }
}

export default Action;