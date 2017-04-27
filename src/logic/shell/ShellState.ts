import { Auth0UserProfile } from "auth0-js";

interface TileState {
    definition: any;
    content: any;
    loading: boolean;
}

interface ShellState {
    loading: boolean;
    loggedIn: boolean;
    showTiles: boolean;
    configurationTemplateId: string;
    configurationTileId: string;
    tiles: TileState[];
    profile: Auth0UserProfile;
}

export default ShellState;