import App from "./../../App";
import Payload from "./../Payload";
import ShellActionTypes from "./ShellActionTypes";

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
}

export default new ShellActions();