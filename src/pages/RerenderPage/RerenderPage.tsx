import { DemoTable, MultiSelect } from "../../components"
import { useGetData } from "./useGetData"
import styled from 'styled-components'
import {useRef } from "react"



export const RerenderPage = () => {
    const count = useRef<number>(0)
    const {bugsData,BUGS_COLUMN,handleApply,HandleMultiSelect,totalCount,page,pages,filters,filterState,resultLimit,handlePagination} = useGetData()
    
    console.log('rendering,page for count :',count.current)

    return <div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>Results found {totalCount}</p>
            <div style={{display:"flex",gap:'8px'}}>
                <p>Page: {`${page}/${pages}`}</p>
                <select value={resultLimit} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handlePagination('resultCount',e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </div>
        </div>
        <SelectionGrid>
            <MultiSelect
        handleSelect={HandleMultiSelect}
        options={filters.assignedTo.map(assign => {
            return {
                key:'assignedTo',
                value:assign
            }
        })}
        selected={filterState}
        // selected={filterState.current}
        />

<MultiSelect
        handleSelect={HandleMultiSelect}
        options={filters.status.map(assign => {
            return {
                key:'status',
                value:assign
            }
        })}
        selected={filterState}
        // selected={filterState.current}
        />
        </SelectionGrid>
        <button onClick={handleApply}>
            Apply
        </button>
        <DemoTable columns={BUGS_COLUMN} data={bugsData}/>
    </div>
}

const SelectionGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:8px;

`