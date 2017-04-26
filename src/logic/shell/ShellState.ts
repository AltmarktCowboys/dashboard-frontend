import { Auth0UserProfile } from "auth0-js";

interface ShellState {
    loggedIn: boolean;
    showTiles: boolean;
    configurationTemplateId: string;
    configurationId: string;
    profile: Auth0UserProfile;
}

export default ShellState;