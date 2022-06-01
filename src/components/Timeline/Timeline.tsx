import React from 'react';
import styled from 'styled-components';

interface ITimelineEvents {
    /**
     * name of the event
     */
    eventName:string;

    /**
     * indicates if the event in timeline is finished, if true will mark the event as finished in ui
     */
    finished:boolean;

    /**
     * subtext if any can be date of the event finished
     */
   
    subText?:string;
   
    /**
     * if the event has a tooltip content, it will appear over every Individual event/task wrapper
     */
    toolTipContent?:string | JSX.Element
}

interface ITimelineProps {
/**
 * Title of the the timeline event
 */
title:string;
/**
 * Array of Events or steps that is there in the current timeline 
 */
events:ITimelineEvents[]
}

export const Timeline = (props:ITimelineProps) => {
    return (
        <TimelineContainerDiv>
            <TimelineTitleDiv>
                {props.title}
            </TimelineTitleDiv>
            <TimelineEventWrapper>
                {props.events &&
                props.events.map(event => {
                    return (
                        <IndividualEventWrapper>
                            {event.eventName}
                            {event.subText}
                        </IndividualEventWrapper>
                    )
                })
                }
            </TimelineEventWrapper>
        </TimelineContainerDiv>
    )
}

const TimelineContainerDiv = styled.div`

`

const TimelineTitleDiv = styled.div`

`

const TimelineEventWrapper = styled.div`
display:flex;
flex-direction:column;
`

const IndividualEventWrapper = styled.div`
`