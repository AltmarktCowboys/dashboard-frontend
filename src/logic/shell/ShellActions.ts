import App from "./../../App";
import Payload from "./../Payload";
import ShellActionTypes from "./ShellActionTypes";
import { ShellShowConfigurationPayload } from "./ShellPayloads";

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
            App.dispatcher.dispatch(<Payload>{
                type: ShellActionTypes.SHELL_ADD_TILE_SUCCESS
            });

            console.log(response);
        }).catch((error) => {
            App.dispatcher.dispatch(<Payload>{
                type: ShellActionTypes.SHELL_ADD_TILE_FAILURE
            });
        });
    }
}

export default new ShellActions();