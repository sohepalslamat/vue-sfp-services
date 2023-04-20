/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, watch } from "vue"

export default class SfpService {
    private _router: any
    private routeQueries: {[key:string]:any}

    constructor(router: any, route: any, queries: {[key:string]:any}) {
        this._router = router
        this.routeQueries = computed(()=>{
            return route.query
        })

        this._getQueryFromUrl(queries,this.routeQueries.value)

        watch(this.routeQueries,(val)=>{
            this._getQueryFromUrl(queries,val)
        })
        watch(queries, (val)=>{
            this._setQuery(val)
        })
    }
    
    /// set queries in route in url
    private _setQuery(queries: {[key:string]:any}) {
        this._router.replace({ path: '', query: { ...this._fixQueriesToSet(queries) } })
    }

    /// get queries from url
    private _getQueryFromUrl(queries: {[key:string]:any}, routeQueries: {[key:string]:any}) {
        for (const [key,query] of Object.entries(queries)) {
            queries[key] = routeQueries[key] ? routeQueries[key] : query
        }
    }

    /// fix queries before send
    private _fixQueriesToSet(queries: {[key:string]:any}) {
        const x:{[key:string]:any} = {...queries}
        Object.keys(x).forEach(function(key) {
            if(!x[key]) delete x[key]
          })
        
        return x
    } 
}
