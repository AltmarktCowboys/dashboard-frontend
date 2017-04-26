import * as React from "react";
import { Container, Store } from "flux/utils";
import ShellStore from "./../../logic/shell/ShellStore";
import ShellActions from "./../../logic/shell/ShellActions";
import Sidebar from "./../_components/sidebar/Sidebar";
import ShellState from "./../../logic/shell/ShellState";
const theme = require("./Shell.scss");

interface ShellContainerState {
    shell: ShellState;
}

class Shell extends React.Component<null, ShellContainerState> {
    constructor(props: null) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
    }

    public static calculateState(): ShellContainerState {
        return {
            shell: ShellStore.getState()
        };
    }

    public static getStores(): Store<any>[] {
        return [ShellStore];
    }

    private onSignOut() {
        ShellActions.signOut();
    }

    private onSignIn() {
        ShellActions.signIn();
    }

    public render() {
        return (
            <div className={ theme["shell"] }>
                <Sidebar
                    loggedIn={ this.state.shell.loggedIn }
                    image={ this.state.shell.loggedIn ? this.state.shell.profile.picture : null }
                    onSignIn={ this.onSignIn }
                    onSignOut={ this.onSignOut }
                />
                <div className="dashboard">
                    Hello World!
                </div>
            </div>
        );
    }
}

export default Container.create(Shell);