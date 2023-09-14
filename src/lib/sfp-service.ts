
import type { RouteLocationNormalizedLoaded, Router } from "vue-router";
import { computed, watch, reactive } from 'vue'

const _fixQueriesToSet = (queries: {[key:string]:any}) => {
    const x:{[key:string]:any} = {...queries}
    Object.keys(x).forEach(function(key) {
        if(!x[key]) delete x[key]
      })
    
    return x
} 

/// set queries in route
const _setQuery = async(queries: {[key:string]:any}, router: any)=> {
    await router.replace({ path: '', query: { ..._fixQueriesToSet(queries) } })
}

const useQueryHandler = (router: Router, route: RouteLocationNormalizedLoaded, queries: {[key:string]:any}) =>{
    const routeQueries = computed(()=>{
        return route.query
    })

    const pushToUrl = async(q:{[key:string]:any}) => {
        const queries: { [key: string]: any } = { ...route.query };
        for (const [key,value] of Object.entries(q)) {
            if (value !== "" && value !== null ) {
                queries[key] = value;
            }
            else {
                if(route.query[key]) {
                    delete queries[key]
                }
            }
        }
        await router.replace({ path: '', query: queries })
    };
    
    const _getQueryFromUrl = computed(() => {
        const nQueries = reactive({...queries})
        for (const [key,query] of Object.entries(nQueries)) {
            if(nQueries[key] != routeQueries.value[key]){
                nQueries[key] = routeQueries.value[key] ? routeQueries.value[key] : query
            }
        }
        return nQueries
    })
    watch(queries, async(val)=>{
        await _setQuery(val, router)
    })
    return {sfpQueries:_getQueryFromUrl, pushToUrl}
}


export {useQueryHandler}