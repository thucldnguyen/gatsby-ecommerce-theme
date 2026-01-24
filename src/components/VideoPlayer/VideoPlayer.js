import React from 'react';
import * as styles from './VideoPlayer.module.css';

const VideoPlayer = ({ videoId, title, poster }) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnailUrl = poster || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.root}
            title={title}
        >
            <img
                src={thumbnailUrl}
                alt={title}
                className={styles.poster}
            />
            <div className={styles.overlay}>
                <div className={styles.playButton}>
                    <svg
                        viewBox="0 0 24 24"
                        className={styles.playIcon}
                        fill="currentColor"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default VideoPlayer;
