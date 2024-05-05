import { React, useEffect } from 'react';
import CaptionShow from './CaptionShow';
import InstagramPost from './InstagramPost';
import CaptionsCategory from '../components/CaptionCategory';
import { useLocation } from 'react-router-dom';

function CaptionContent() {
  const location = useLocation();
  const [, , path, gender] = location.pathname.split('/');
  const [title, subtitle] = path.split('-');
  
  useEffect(() => {
    document.title = `${subtitle.replace('%20', ' ')} Captions for ${gender || 'Instagram'}`;
  }, [subtitle, gender]);

  return (
    <>
      <div className="w-2/12 hidden sm:flex">
        <CaptionsCategory />
      </div>
      <div className="sm:w-10/12 dark:text-white">
        <h1 className="sm:p-5 text-6xl font-extrabold w-full text-center">
          {subtitle.replace('%20', ' ')} Captions for {gender || 'Instagram'}
        </h1>
        <div className="sm:flex justify-between border mt-2">
          <CaptionShow />
          <span className="hidden sm:flex">
            <InstagramPost />
          </span>
        </div>
      </div>
    </>
  );
}

export default CaptionContent;