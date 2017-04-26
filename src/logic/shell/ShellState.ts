import { Auth0UserProfile } from "auth0-js";

interface ShellState {
    loading: boolean;
    loggedIn: boolean;
    showTiles: boolean;
    configurationTemplateId: string;
    configurationTileId: string;
    tiles: any[];
    profile: Auth0UserProfile;
}

export default ShellState;