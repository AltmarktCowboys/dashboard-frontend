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

    public showConfiguration(templateId: string, id: string) {
        App.dispatcher.dispatch(<ShellShowConfigurationPayload>{
            type: ShellActionTypes.SHELL_SHOW_CONFIGURATION,
            id: id,
            templateId: templateId
        });
    }

    public cancelConfiguration() {
        App.dispatcher.dispatch(<Payload>{
            type: ShellActionTypes.SHELL_CANCEL_CONFIGURATION
        })
    }
}

export default new ShellActions();