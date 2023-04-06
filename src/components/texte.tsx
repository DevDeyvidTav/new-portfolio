import ReactPlayer from 'react-player';

const VideoPlayer = ( url: string) => {
  return (
    <div>
      <ReactPlayer url={url} controls={true} />
    </div>
  );
};