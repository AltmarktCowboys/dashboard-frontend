import App from "./../../App";
import Payload from "./../Payload";
import ShellActionTypes from "./ShellActionTypes";
import {
    ShellShowConfigurationPayload, ShellAddTilePayload, ShellRefreshDashboardPayload, ShellTileIdPayload,
    ShellRefreshTileContentSuccessPayload,
} from "./ShellPayloads";

class ShellActions {
    public signIn() {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_SIGN_IN
        });
    }

    public signOut() {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_SIGN_OUT
        });
    }

    public showTiles() {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_SHOW_TILES
        });
    }

    public showConfiguration(templateId: string, tileId: string) {
        App.dispatcher.dispatch(<ShellShowConfigurationPayload>{
            type: ShellActionTypes.SHELL_SHOW_CONFIGURATION,
            tileId: tileId,
            templateId: templateId
        });
    }

    public cancelConfiguration() {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_CANCEL_CONFIGURATION
        });
    }

    public saveConfiguration(data: any, tileId: string) {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_ADD_TILE
        });

        App.fetch(`/tile/${data.templateId}/${data.userId}`, { method: "POST", body: JSON.stringify(data) }).then((response) => {
            if (!response.ok) {
                throw new Error();
            }

            response.json().then((data) => {
                App.dispatcher.dispatch(<ShellAddTilePayload>{
                    type: ShellActionTypes.SHELL_ADD_TILE_SUCCESS,
                    tile: data
                });

                this.refreshTileContent(data.templateId, data.id, data.userId);
            });
        }).catch((error) => {
            App.dispatcher.dispatch(<Payload>{
                type: ShellActionTypes.SHELL_ADD_TILE_FAILURE
            });
        });
    }

    public refreshDashboard(userId: string) {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_REFRESH_DASHBOARD
        });

        App.fetch(`/dashboard/${userId}`).then((response) => {
            if (!response.ok) {
                throw new Error();
            }

            response.json().then((data) => {
                App.dispatcher.dispatch(<ShellRefreshDashboardPayload>{
                    type: ShellActionTypes.SHELL_REFRESH_DASHBOARD_SUCCESS,
                    tiles: data.tiles
                });

                data.tiles.forEach((tile: any) => {
                    this.refreshTileContent(tile.templateId, tile.id, userId);
                });
            });
        }).catch((error) => {
            App.dispatcher.dispatch(<Payload>{
                type: ShellActionTypes.SHELL_REFRESH_DASHBOARD_FAILURE
            });
        });
    }

    public refreshTileContent(templateId: string, tileId: string, userId: string) {
        App.dispatcher.dispatch(<ShellTileIdPayload>{
            type: ShellActionTypes.SHELL_REFRESH_TILE_CONTENT,
            tileId: tileId
        });

        App.fetch(`/tile/${templateId}/${userId}/${tileId}/content`).then((response) => {
            if (!response.ok) {
                throw new Error();
            }

            response.json().then((data) => {
                App.dispatcher.dispatch(<ShellRefreshTileContentSuccessPayload>{
                    type: ShellActionTypes.SHELL_REFRESH_TILE_CONTENT_SUCCESS,
                    tileId: tileId,
                    content: data
                });
            });
        }).catch((error) => {
            App.dispatcher.dispatch(<ShellTileIdPayload>{
                type: ShellActionTypes.SHELL_REFRESH_TILE_CONTENT_FAILURE,
                tileId: tileId
            });
        });
    }

    public deleteTile(templateId: string, tileId: string, userId: string) {
        App.dispatcher.dispatch(<ShellTileIdPayload>{
            type: ShellActionTypes.SHELL_DELETE_TILE,
            tileId: tileId
        });

        App.fetch(`/tile/${templateId}/${userId}/${tileId}`, { method: "DELETE" }).then((response) => {
            if (!response.ok) {
                throw new Error();
            }

            response.json().then(() => {
                App.dispatcher.dispatch(<ShellTileIdPayload>{
                    type: ShellActionTypes.SHELL_DELETE_TILE_SUCCESS,
                    tileId: tileId
                });
            });
        }).catch((error) => {
            App.dispatcher.dispatch(<ShellTileIdPayload>{
                type: ShellActionTypes.SHELL_DELETE_TILE_FAILURE,
                tileId: tileId
            });
        });
    }
}

export default new ShellActions();