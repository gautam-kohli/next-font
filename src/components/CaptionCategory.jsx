
import React, { useContext, useState } from 'react';
import { Caption } from '@/Context/CaptionContext';
import Link from 'next/link';

const CaptionsCategory = () => {
  const { setSubTitle, data, fetchdatabio } = useContext(Caption);
  const [submenu, setSubmenu] = useState();

  const menuShow = (e) => {
    setSubmenu((prev, index) => (prev === e ? false : e));
  };

  return (
    <div
      className={`w-full h-screen bg-gray-100 sm:border sm:w-full text-center sticky top-0 text-black dark:text-white dark:bg-black`}
    >
      <h2 className="font-bold text-xl lg:text-4xl p-3">Captions</h2>
      <div className="pb-3">
        <ul>
          {data.map((data, index) => (
            <div
              className="my-2 border sm:w-full w-80 rounded-xl m-auto p-2 sm:p-0"
              key={index}
            >
              <div className="flex justify-between items-center">
                <h1
                  className="cursor-pointer font-semibold text-2xl w-full"
                  onClick={() => {
                    menuShow(index);
                  }}
                >
                  {data.title}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-3 w-3 dark:fill-white"
                  version="1.1"
                  id="Layer_1"
                  xmlnsXlink="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_222_"
                    d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                     c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0001,21.213 
                     C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
                     C255,161.018,253.42,157.202,250.606,154.389z"
                  />
                </svg>
              </div>
              <div>
                <ul className={`${submenu === index ? 'visible' : 'hidden'} m-auto  overflow-hidden`}>
                  {data.subTitle.map((subhead, ind) => (
                    <Link
                      key={ind}
                      href={`/captions/${data.title}-${subhead}`}
                      className="py-2 text-xl  font-normal  w-28 block  m-auto "
                      // onClick={() => {
                      //   setSubTitle({ subtitle: subhead, title: index });
                      // }}
                    >
                      {subhead}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaptionsCategory;