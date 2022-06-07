import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import { getBugs } from "../../utils/MockApiController"


declare interface IKeyValue {
    key:string,
    value:string
}

declare interface IInputBugData {
    filters:IKeyValue[],
    page:number,
    resultLimit:number
}
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

declare interface IFilterPayload {
    action:string
}
export const useGetData = () =>{

    const [page,setPage] = useState(1)//current page filter
    const [resultLimit,setResultLimit] = useState(10) //result limit filter
    const [totalCount,setTotalCount] = useState(0) // total result count filter
    const [filters,setFilters] =useState<IFilterBugData>({
        platform:[],
        rootCause: [],
        reportedBy: [],
        assignedTo: [],
        status: [],
        defectCategory: [],
        severity: [],
        priority: [],
    })//filter options

    const [bugsData,setBugsData] = useState<IBug[]>([]) //bugs result

    const handleFilterDispatch = (state:IKeyValue[],payload:IFilterPayload) => {
        let _temp = [...state]
        switch(payload.action){
            case 'add':
                return _temp
            case 'reset':
                return []
            default:
                return _temp
        }
    }// use reducer for handling function temp filter state

    // const filterState = useRef<IKeyValue[]>([])
    const [filterState,filterDispatch] = useReducer(handleFilterDispatch,[])//temp filter state
    const [finalFilterState,setFinalFiterState] = useState<IKeyValue[]>([])//input filter state

    const memoizedInput = useMemo(() => {
        return {
            filters:finalFilterState,
            page,
            resultLimit
        }
    },[finalFilterState,page,resultLimit])

    const getBugsData = useCallback(() =>   {
        console.log('inside memoized callback',memoizedInput)
        
        return getBugs(memoizedInput)
    }, [memoizedInput])
    const BUGS_COLUMN = [
        {
            key:'id',
            title:'Defect ID'
        },
        {
            key:'module',
            title:'Module'
        },
        {
            key:'platform',
            title:'Platform'
        },
        {
            key:'summary',
            title:'Summary'
        },
        {
            key:'severity',
            title:'Severity'
        },
        {
            key:'priority',
            title:'Priority'
        },

        {
            key:'reportedBy',
            title:'Reported By'
        },
        {
            key:'assignedTo',
            title:'Assigned To'
        },
        {
            key:'status',
            title:'Status'
        },
        {
            key:'defectCategory',
            title:'Defect Category'
        },
        {
            key:'rootCause',
            title:'Root Cause'
        }

    ]

    const HandleMultiSelect = (option:IKeyValue) => {
        const optionIndex = filterState.findIndex(filter => filter.key === option.key && filter.value === option.value)
        optionIndex === -1?filterState.push(option):filterState.splice(optionIndex,1)
        filterDispatch({action:'add'})
    }
    const handleApply = () => {
        setFinalFiterState(filterState) 
    }


    useEffect(() => {
        console.log('rendering dataaaaaa')
        let {resultCount,currentPage,bugs,filters} = getBugsData()
        setBugsData(bugs)
        setFilters({...filters})
        setPage(currentPage)
        setTotalCount(resultCount)
    },[getBugsData])

    return {bugsData,totalCount,filters,pages:Math.ceil(totalCount/resultLimit),HandleMultiSelect,handleApply,BUGS_COLUMN,page,resultLimit,filterState}
}


