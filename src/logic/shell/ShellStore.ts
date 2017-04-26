import { ReduceStore } from "flux/utils";
import Dispatcher from "./../Dispatcher";

interface ShellStoreState {

}

class ShellStore extends ReduceStore<ShellStoreState, any> {
    constructor() {
        super(Dispatcher);
    }

    public getInitialState(): ShellStoreState {
        return null;
    }

    public reduce(state: ShellStoreState, payload: any): ShellStoreState {
        return null;
    }
}

export default new ShellStore();