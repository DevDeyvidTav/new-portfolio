import ReactPlayer from 'react-player';

export const VideoPlayer = ( url: any) => {
  return (
    <div>
      <ReactPlayer url={url} controls={true} />
    </div>
  );
};