import * as React from "react";
import { Container, Store } from "flux/utils";
import Dialog from "react-toolbox/lib/dialog";
import ShellStore from "./../../logic/shell/ShellStore";
import ShellActions from "./../../logic/shell/ShellActions";
import ShellState from "./../../logic/shell/ShellState";
import Sidebar from "./../_components/sidebar/Sidebar";
import Dashboard from "./../dashboard/Dashboard";
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

    private onAddTile() {
        ShellActions.showTiles();
    }

    private onTileSelected(templateId: string) {
        ShellActions.showConfiguration(templateId, null);
    }

    private cancelConfiguration() {
        ShellActions.cancelConfiguration();
    }

    private getConfigurationActions() {
        return [
            { label: "Cancel", onClick: this.cancelConfiguration },
            { label: "Save", onClick: null }
        ];
    }

    public render() {
        return (
            <div className={ theme["shell"] }>
                <Dialog
                    type="small"
                    actions={ this.getConfigurationActions() }
                    active={ this.state.shell.configurationTemplateId != null }
                    onOverlayClick={ this.cancelConfiguration }
                    title='New Tile'
                >
                    <section>
                        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
                    </section>
                </Dialog>
                <Sidebar
                    showTiles={ this.state.shell.showTiles }
                    loggedIn={ this.state.shell.loggedIn }
                    image={ this.state.shell.loggedIn ? this.state.shell.profile.picture : null }
                    onSignIn={ this.onSignIn }
                    onSignOut={ this.onSignOut }
                    onAddTile={ this.onAddTile }
                    onTileSelected={ this.onTileSelected }
                />
                <Dashboard />
            </div>
        );
    }
}

export default Container.create(Shell);