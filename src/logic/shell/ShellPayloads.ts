import Payload from "./../Payload";
import {Auth0UserProfile} from "auth0-js";

export interface ShellAuthenticatePayload extends Payload {
    profile: Auth0UserProfile;
}