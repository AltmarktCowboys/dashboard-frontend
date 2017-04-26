import * as React from "react";
import * as assign from "object-assign";
import { Container, Store } from "flux/utils";
import ShellStore from "./../../logic/shell/ShellStore";
import ShellActions from "./../../logic/shell/ShellActions";
import ShellState from "./../../logic/shell/ShellState";
import Sidebar from "./../_components/sidebar/Sidebar";
import ConfigurationDialog from "./../_components/configuration/ConfigurationDialog";
import Dashboard from "./../dashboard/Dashboard";
import LoadingOverlay from "../_components/loading_overlay/LoadingOverlay";
const theme = require("./Shell.scss");

interface ShellContainerState {
    shell: ShellState;
}

class Shell extends React.Component<null, ShellContainerState> {
    constructor(props: null) {
        super(props);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignOut = this.onSignOut.bind(this);
        this.onAddTile = this.onAddTile.bind(this);
        this.onTileSelected = this.onTileSelected.bind(this);
        this.cancelConfiguration = this.cancelConfiguration.bind(this);
        this.saveConfiguration = this.saveConfiguration.bind(this);
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

    private saveConfiguration(data: any) {
        ShellActions.saveConfiguration(assign({}, data, {
            userId: this.state.shell.profile.user_id
        }));
    }

    public render() {
        return (
            <div className={ theme["shell"] }>
                <ConfigurationDialog
                    tileId={ this.state.shell.configurationTileId }
                    templateId={ this.state.shell.configurationTemplateId }
                    onCancel={ this.cancelConfiguration }
                    onSave={ this.saveConfiguration }
                />
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