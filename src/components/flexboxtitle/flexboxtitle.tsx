import { Paper } from ".."

interface FlexBoxTitleCardProps {
    title:string
}

export const FlexBoxTitleCard = (props:FlexBoxTitleCardProps) => {
    return(
        <Paper>
        <div className="flex_row titleCard">
            {props.title}
        </div>
        </Paper>
    )
}