import * as React from "react";
import { Container, Store } from "flux/utils";
import ShellStore from "./../../logic/shell/ShellStore"
import Sidebar from "./../_components/sidebar/Sidebar";
const theme = require("./Shell.scss");

interface ShellState {

}

class Shell extends React.Component<null, null> {
    constructor(props: null) {
        super(props);
    }

    public static calculateState(): ShellState {
        return null;
    }

    public static getStores(): Store<any>[] {
        return [ShellStore];
    }

    public render() {
        return (
            <div className={ theme["shell"] }>
                <Sidebar />
            </div>
        );
    }
}

export default Container.create(Shell);