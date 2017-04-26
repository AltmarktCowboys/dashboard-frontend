import * as React from "react";
import Avatar from "react-toolbox/lib/avatar";
import Tooltip from "react-toolbox/lib/tooltip";
import Action from "./Action";
const theme = require("./Sidebar.scss");

interface SidebarProps {
    loggedIn: boolean;
    image: string;
    onSignIn: () => void;
    onSignOut: () => void;
}

class Sidebar extends React.Component<SidebarProps, null> {
    constructor(props: null) {
        super(props);
    }

    public render() {
        const TooltipAction = Tooltip(Action);

        return (
            <div className={ theme["sidebar"] }>
                <div className={ theme["row"] }>
                    { this.props.loggedIn && <Avatar image={ this.props.image } /> }
                    { !this.props.loggedIn && <TooltipAction tooltip="Sign In" icon="fa-sign-in" onClick={ this.props.onSignIn } /> }
                </div>
                <div className={ theme["row"] }>
                </div>
                <div className={ theme["row"] }>
                    { this.props.loggedIn && <TooltipAction tooltip="Sign Out" icon="fa-sign-out" onClick={ this.props.onSignOut } /> }
                </div>
            </div>
        );
    }
}

export default Sidebar;