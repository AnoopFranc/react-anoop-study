import { BugsDataSource } from "../constant";

declare interface IBug {
    id: number;
    module: string;
    platform: string;
    summary: string;
    rootCause?: string;
    reportedBy: string;
    assignedTo: string;
    status: string;
    defectCategory: string;
    severity: string;
    priority: string;
}

declare interface ITableData {
    [key: string]: any;
}

declare interface IFilterBugData {
    platform: string[];
    rootCause: string[];
    reportedBy: string[];
    assignedTo: string[];
    status: string[];
    defectCategory: string[];
    severity: string[];
    priority: string[];
}

declare interface IKeyValue {
    key:string,
    value:string
}

declare interface IInputBugData {
    filters:IKeyValue[],
    page:number,
    resultLimit:number
}



declare interface IResult {
    bugs:IBug[]
    resultCount:number
    pages:number
    currentPage:number
    filters:IFilterBugData
}

declare interface IResultAndFilter {
    result:IBug[],
    filters:IFilterBugData
}

export const getBugs = (input:IInputBugData):IResult => {
    const {result,filters} = getFilteredOptions(input)
    let _bugs = [...result].slice((input.page - 1) * input.resultLimit, input.page * input.resultLimit)
    return {
        resultCount:result.length,
        pages:Math.ceil(result.length/input.resultLimit),
        currentPage:1,
        bugs:_bugs,
        filters:filters
    }
}

/**
 * 
 * @param key  key of data
 * @param input input sent
 * @returns  options array which is string
 */
const getFilteredOptions = (input:IInputBugData):IResultAndFilter => {
    let _BugFilters:IFilterBugData = {
        platform: [],
        rootCause: [],
        reportedBy: [],
        assignedTo: [],
        status: [],
        defectCategory: [],
        severity: [],
        priority: []
    }
    let _usedFiltermap:ITableData = {
    }
    input.filters.forEach(filter => {
        _usedFiltermap[filter.key]?_usedFiltermap[filter.key as keyof IBug] = [..._usedFiltermap[filter.key],filter.value]:_usedFiltermap[filter.key] = [filter.value]
    })

    let result = input.filters.length === 0?BugsDataSource:BugsDataSource.filter(bug => {
        const key = Object.entries(_usedFiltermap)
        
        const filterReducer = (pre:any,current:any,ind:number) => {
            return pre && current[1].includes(bug[(current[0] as keyof IBug)])
        }
        return key.reduce(filterReducer ,true)
    })
    let _filtersMap = new Map()
    let referenceData:IBug[] = []
    if(result.length === 0 ){
        referenceData = [...BugsDataSource]

    }else{
        referenceData = [...result]
    }
    referenceData.forEach(bug => {
        Object.entries(bug).map(([key,val] ) => {
            const filterSet = new Set<string>()
            _filtersMap.has(key)?_filtersMap.set(key,_filtersMap.get(key).add(val)):_filtersMap.set(key,filterSet.add(val))
        })
    })
    _filtersMap.forEach((value,key) => {
        _BugFilters[key as keyof IFilterBugData] = Array.from(value)
    })
    return {result,filters:_BugFilters}
}