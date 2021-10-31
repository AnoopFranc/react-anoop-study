import { useRef } from "react"

interface VideoPlayerProps {
    src:string
    autoPlay?:boolean
}

export const VideoPlayer = (props: VideoPlayerProps) => {
    const videoElementRef = useRef<HTMLVideoElement>(null)

    const togglePlayPause = () => {
        if(videoElementRef.current){
            if(videoElementRef.current.paused){
                videoElementRef.current.play()
            }else{
                videoElementRef.current.pause()
            }
        }
    }

    const seekToTime = (time:number) => {
        if(videoElementRef.current){
            videoElementRef.current.currentTime = time
        }
    }

    return(
        <div>
            <video ref={videoElementRef} src={props.src} controls autoPlay={props.autoPlay}>
            </video>
        </div>
    )
}