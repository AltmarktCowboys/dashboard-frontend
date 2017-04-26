import { Dispatcher } from "flux";
import * as assign from "object-assign";

interface Auth0Config {
    domain: string;
    clientId: string;
}

interface ApiConfig {
    endpoint: string;
    auth0: Auth0Config;
}

interface Config {
    api: ApiConfig;
}

interface TileDefinition {
    template_id: string;
    icon: string;
    title: string;
}

class App {
    private _config: Config;
    private _tiles: TileDefinition[];
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

    public get tiles(): TileDefinition[] {
        return this._tiles;
    }

    public fetch(path: string, options?: any) {
        return window.fetch(this.config.api.endpoint + path, assign({}, options, {
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }));
    }
}

export default new App();