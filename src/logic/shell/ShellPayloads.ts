import Payload from "./../Payload";
import {Auth0UserProfile} from "auth0-js";

export interface ShellAuthenticatePayload extends Payload {
    profile: Auth0UserProfile;
}

export interface ShellShowConfigurationPayload extends Payload {
    tileId: string;
    templateId: string;
}

export interface ShellAddTilePayload extends Payload {
    tile: any;
}

export interface ShellRefreshDashboardPayload extends Payload {
    tiles: any,
}

export interface ShellRefreshTileContent extends Payload {
    tileId: string;
}

export interface ShellRefreshTileContentSuccess extends Payload {
    tileId: string;
    content: any;
}