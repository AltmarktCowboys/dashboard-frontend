import { ReduceStore } from "flux/utils";
import * as assign from "object-assign";
import Auth0Lock from "auth0-lock";
import App from "./../../App";
import Payload from "./../Payload";
import ShellActionTypes from "./ShellActionTypes";
import ShellState from "./ShellState";
import {ShellAuthenticatePayload, ShellShowConfigurationPayload} from "./ShellPayloads";

class ShellStore extends ReduceStore<ShellState, Payload> {
    private _auth: Auth0LockStatic;

    constructor() {
        super(App.dispatcher);

        this.onAuthenticated = this.onAuthenticated.bind(this);

        this._auth = new Auth0Lock(App.config.api.auth0.clientId, App.config.api.auth0.domain, {
            languageDictionary: {
                title: "Dashboard"
            },
            theme: {
                logo: 'https://teecraze.com/wp-content/uploads/spacecowboy3.jpg'
            },
        });
        this._auth.on("authenticated", this.onAuthenticated);
    }

    private onAuthenticated(authResult: any) {
        this._auth.getProfile(authResult.idToken, (error, profile) => {
            App.dispatcher.dispatch(<Payload>{
                type: ShellActionTypes.SHELL_AUTHENTICATE,
                profile: profile
            });
        });
    }

    public getInitialState(): ShellState {
        return {
            loading: false,
            configurationTemplateId: null,
            configurationTileId: null,
            showTiles: false,
            loggedIn: false,
            profile: null
        };
    }

    public reduce(state: ShellState, payload: Payload): ShellState {
        switch (payload.type) {
            case ShellActionTypes.SHELL_SIGN_IN:
                this._auth.show();
                return state;
            case ShellActionTypes.SHELL_SIGN_OUT:
                return assign({}, state, {
                    loggedIn: false,
                    profile: null
                });
            case ShellActionTypes.SHELL_AUTHENTICATE:
                return assign({}, state, {
                    loggedIn: true,
                    profile: (<ShellAuthenticatePayload>payload).profile
                });
            case ShellActionTypes.SHELL_SHOW_TILES:
                return assign({}, state, {
                    showTiles: true
                });
            case ShellActionTypes.SHELL_SHOW_CONFIGURATION:
                return assign({}, state, {
                    showTiles: false,
                    configurationTemplateId: (<ShellShowConfigurationPayload>payload).templateId,
                    configurationTileId: (<ShellShowConfigurationPayload>payload).tileId
                });
            case ShellActionTypes.SHELL_CANCEL_CONFIGURATION:
                return assign({}, state, {
                    configurationTemplateId: null,
                    configurationId: null
                });
            case ShellActionTypes.SHELL_ADD_TILE:
                return assign({}, state, {
                    configurationTemplateId: null,
                    configurationId: null,
                    loading: true
                });
            case ShellActionTypes.SHELL_ADD_TILE_SUCCESS:
                return assign({}, state, {
                    loading: false
                });
            case ShellActionTypes.SHELL_ADD_TILE_FAILURE:
                return assign({}, state, {
                    loading: false
                });
        }

        return state;
    }
}

export default new ShellStore();