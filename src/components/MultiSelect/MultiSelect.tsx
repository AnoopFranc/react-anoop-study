import styled from 'styled-components'

declare interface IKeyValue {
    key:string,
    value:string
}
declare interface IMultiSelectProps {
    options:IKeyValue[],
    selected:IKeyValue[],
    handleSelect:(option:IKeyValue) => void
}

export const MultiSelect= (props:IMultiSelectProps) => {

    return <div>{props.options.map((option,index) => {
        return (
        <div style={{display:'flex'}} onClick={() => props.handleSelect(option)}>
            {
            props.selected.findIndex(selectOption => selectOption.key === option.key && selectOption.value === option.value) !== -1 && 
            <CheckMarkDiv></CheckMarkDiv>}
            <div key={option.key + index}>{option.value}</div>
        </div>)
    })}</div>
}

const CheckMarkDiv = styled.div`
display:block;
&::before{
    content: '\\2705';
    display: inline-block;
    padding: 0 6px 0 0;
}
`
