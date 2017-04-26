import { Auth0UserProfile } from "auth0-js";

interface ShellState {
    loggedIn: boolean;
    profile: Auth0UserProfile;
}

export default ShellState;