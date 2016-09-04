/**
 * Created by rtholmes on 2016-06-19.
 */

import Log from "../Util";

export interface QueryRequest {
    GET: string|string[];
    WHERE: {};
    AS: string;
}

export interface QueryResponse {
}

export default class QueryController {

    public isValid(query: QueryRequest): boolean {
        if (typeof query !== 'undefined' && query !== null) {
            return true;
        }
        return false;
    }

    public query(query: QueryRequest): QueryResponse {
        Log.trace('QueryController::query( ' + query + ' )');

        // TODO: implement this
        return {status: 'received', ts: new Date().getTime()};
    }
}
