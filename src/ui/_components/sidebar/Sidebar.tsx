import * as React from "react";
import { Avatar } from "react-toolbox/lib/avatar";
const theme = require("./Sidebar.scss");

class Sidebar extends React.Component<null, null> {
    constructor(props: null) {
        super(props);
    }

    public render() {
        return (
            <div className={ theme["sidebar"] }>
                <Avatar />
                <div className={ theme["actions"] }>

                </div>
            </div>
        );
    }
}

export default Sidebar;