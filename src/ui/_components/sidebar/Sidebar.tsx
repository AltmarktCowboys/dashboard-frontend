import * as React from "react";
import * as classNames from "classnames";
import App from "./../../../App";
import Avatar from "react-toolbox/lib/avatar";
import Tooltip from "react-toolbox/lib/tooltip";
import Action from "./Action";
const theme = require("./Sidebar.scss");

interface SidebarProps {
    showTiles: boolean;
    loggedIn: boolean;
    image: string;
    onSignIn: () => void;
    onSignOut: () => void;
    onAddTile: () => void;
    onTileSelected: (templateId: string) => void;
}

class Sidebar extends React.Component<SidebarProps, null> {
    constructor(props: null) {
        super(props);
    }

    public renderTiles() {
        return App.tiles.map((tile) => {
            return (
                <div key={ tile.template_id } className={ theme["tile"] } onClick={ () => this.props.onTileSelected(tile.template_id) }>
                    <span className={ theme["icon"] }><i className={ classNames("fa fa-2x", tile.icon) } /></span>
                    <span className={ theme["title"] }>{ tile.desc }</span>
                </div>
            );
        });
    }

    public render() {
        const TooltipAction = Tooltip(Action);
        const tilesViewClass = classNames(theme["tiles-view"], {
            [theme["show"]]: this.props.showTiles,
            [theme["hide"]]: !this.props.showTiles
        });

        let mainRow = <div className={ theme["row"] } />;
        if (this.props.loggedIn) {
            mainRow = (
                <div className={ theme["row"] }>
                    <TooltipAction tooltip="Add Tile" icon="fa-plus-circle" onClick={ this.props.onAddTile } />
                    <TooltipAction tooltip="Settings" icon="fa-cog" onClick={ null } />
                </div>
            );
        }

        return (
            <div className={ theme["sidebar-container"] }>
                <div className={ theme["sidebar"] }>
                    <div className={ theme["row"] }>
                        { this.props.loggedIn && <Avatar image={ this.props.image } /> }
                        { !this.props.loggedIn && <TooltipAction tooltip="Sign In" icon="fa-sign-in" onClick={ this.props.onSignIn } /> }
                    </div>
                    { mainRow }
                    <div className={ theme["row"] }>
                        { this.props.loggedIn && <TooltipAction tooltip="Sign Out" icon="fa-sign-out" onClick={ this.props.onSignOut } /> }
                    </div>
                </div>
                <div className={ tilesViewClass }>
                    { this.renderTiles() }
                </div>
            </div>
        );
    }
}

export default Sidebar;