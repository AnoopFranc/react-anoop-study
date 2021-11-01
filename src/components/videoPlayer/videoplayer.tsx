import { useRef } from "react"

interface VideoPlayerProps {
    src:string
    autoPlay?:boolean
}

export const VideoPlayer = (props: VideoPlayerProps) => {
    const videoElementRef = useRef<HTMLVideoElement>(null)

    const togglePlayPause = () => {
        if(videoElementRef.current){
            videoElementRef.current.paused?videoElementRef.current.play():videoElementRef.current.pause()
        }
    }

    const seekToTime = (time:number) => {
        if(videoElementRef.current){
            videoElementRef.current.currentTime = time
        }
    }


    const Mute = () => {
        if(videoElementRef.current){
            videoElementRef.current.volume = 0.0
        }
    }

    return(
        <div className="custom_video_player_wrapper">
            <video ref={videoElementRef} src={props.src} autoPlay={props.autoPlay}>
            </video>

            <div className="custom_video_controls" >
                <div className="control_elemennts_wrapper">

                    <div onClick={togglePlayPause}>
                    {videoElementRef.current?.paused?"play":"pause"} 
                    </div>

                    <div onClick={Mute}>
                        mute
                    </div>

                </div>
            </div>
        </div>
    )
}