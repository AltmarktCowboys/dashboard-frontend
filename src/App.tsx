import { Dispatcher } from "flux";

interface Auth0Config {
    domain: string;
    clientId: string;
}

interface ApiConfig {
    auth0: Auth0Config;
}

interface Config {
    api: ApiConfig;
}

class App {
    private _config: Config;
    private _tiles: any;
    private _dispatcher: Dispatcher<any>;

    constructor() {
        this._dispatcher = new Dispatcher();
        this._config = require("./../config.json");
        this._tiles = require("./../tiles.json");
    }

    public get dispatcher(): Dispatcher<any> {
        return this._dispatcher;
    }

    public get config(): Config {
        return this._config;
    }

    public get tiles() {
        return this._tiles;
    }
}

export default new App();