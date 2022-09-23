/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, watch } from "vue"

export default class SfpService {
    private _router: any
    private _queries: object

    constructor(router: any, route: any, queries: object) {
        this._router = router
       
        const self:{[key:string]:any} = this
        
        const initQueries = () => {
            const returnQueries: {[key:string]:any} = {}
            for (const [key,query] of Object.entries(queries)) {
                self[key] = ref(route.query[key] ? route.query[key] : query)
                watch(self[key], () =>{
                    this._setQuery(this._queries)
                })
                returnQueries[key] = self[key]
            }
            return returnQueries
        }

        this._queries = initQueries()
        
    }
    /// return queries as data
    get queries(): any {
        return this._queries
    }

    /// set queries in route in url
    private _setQuery(queries: object) {
        this._router.replace({ path: '', query: { ...this._fixQueriesToSet(queries) } })
    }

    /// fix queries before send
    private _fixQueriesToSet(queries: object): object {
        const x:{[key:string]:any} = {...queries}
        Object.keys(x).forEach(function(key) {
            x[key].value ? x[key] = x[key].value : delete x[key]
          })
        
        return x
    } 
}
