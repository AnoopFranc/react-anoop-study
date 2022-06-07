import React from "react"

declare interface IDemoTableProps {
    columns:IDemoTableColumn[]
    data:ITableData[]
}
declare interface ITableData {
    [key: string]: any;
}
declare interface IDemoTableColumn {
    title:string,
    width?:React.CSSProperties['width']
    key:string
}
export const DemoTable = (props:IDemoTableProps) => {
    return <>
        <div style={{display:'flex'}}>
        {props.columns.map((column,index) => {
            return (<div key={column.title + column.key + index} style={{width:column.width??`${100/(props.columns.length || 1)}%`,padding:'8px'}}>
                {column.title}
            </div>)
        })}
        </div>
        {props.data.map((data,indexData) => {

        return (<div key={indexData + 'row'} style={{display:'flex'}}>
        {props.columns.map((column,index) => {
                return <div key={column.key + index +'.'+indexData} style={{width:column.width??`${100/(props.columns.length || 1)}%`,padding:'8px',display:'block',border:'1px solid black'}}>
                    {data[column.key]}
                </div>
                })}
            </div>)
        })}

    </>
}