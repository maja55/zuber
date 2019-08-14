import React, { useContext, useRef } from "react";
import LazyLoad from "react-lazyload";
import { Fade } from "react-reveal";
import { DataContext } from "../pages/_app";
import Section from './Section';

const Video = () => {
    const videoEl = useRef(null);
    const { video } = useContext(DataContext);

    if (!video) return null;

    const { url, placeholder } = video;

    if (!url) return null;

    const onReveal = (isIntersecting) => {
        if (videoEl && videoEl.current) {
            if (isIntersecting) {
                videoEl.current.play()
            } else videoEl.current.pause()
        }
    }

    return (
        <LazyLoad height={400} offset={1000}>
            <Section
                baseClass="video"
                flexHeight
                observeIntersection
                onReveal={onReveal}
            >
                <Fade bottom opposite>
                    <div className="p-rel">
                        <video
                            ref={videoEl}
                            controls
                            poster={placeholder}
                            src={url}
                            playsInline
                            style={{ width: "100%" }}
                            muted
                        />
                    </div>
                </Fade>
            </Section>
        </LazyLoad>
  );
};

export default Video;
