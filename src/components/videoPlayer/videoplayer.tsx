import { useRef, useState } from "react"

interface VideoPlayerProps {
    src:string
    autoPlay?:boolean
}

export const VideoPlayer = (props: VideoPlayerProps) => {
    const [ispaused,setIsPaused] = useState(false)
    const videoElementRef = useRef<HTMLVideoElement>(null)

    const togglePlayPause = () => {
        if(videoElementRef.current){
            ispaused?videoElementRef.current.play():videoElementRef.current.pause()
            setIsPaused(!ispaused)
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

                    <div onClick={togglePlayPause} className={`video_control_play ${ispaused?"playing":"paused"}`}>
                    </div>

                    <div onClick={Mute}>
                        Mute
                    </div>

                </div>
            </div>
        </div>
    )
}