import React, { useContext, useState } from 'react';
import BioFontInstaProfile from '../components/BioFontInstaProfile.jsx';
import BioFontshow from '../components/BioFontShow.jsx';
import BioFontInstaCategory from '../components/BioFontInstaCategory.jsx';
import { Caption } from '../Context/CaptionContext';
import PreviewBio from '../components/PreviewBio.jsx';
import { Link } from 'react-router-dom';

function BioFontcontent() {
  // const { fetchdatabio } = useContext(Caption);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const fetchdatabio = [{
    "_id": {
      "$oid": "660b02897b73d881608a49ec"
    },
    "title": "habn",
    "subTitle": [
      "mouj",
      "subtitle2"
    ],
    "data": {
      "mouj": {
        "unisex": [
          "kawaya",
          "Not just a moment, but a movement.",
          "Coffee enthusiast | Book lover | Daydream believer ☕✨",
          "✨ Adding a little sparkle to your day.\n🍰 Life is short. Eat cake.\n💪🧠😜 Strong, Smart & Silly\n⏳ Life is too short to be updating Instagram bios.\n🙋‍♂️ Living proof that nobody is perfect.",
          "gautam\nkohli\nyo",
          "🔥Charming Prince 👑\n❤️Love My Pagli😉\n😍Gym LøVèr 💪\n📸Photography💕"
        ],
        "boys": [
          "gwag"
        ]
      },
      "subtitle2": {
        "unisex": [
          "gwga",
          "🌌🔇 Silence is the loudest scream. 🔇🌌\n⚔️🛡️ Don’t be a worrier, be a warrior. 🛡️⚔️\n🌟⏳ If not now, when? If not you, who? ⏳🌟\n👠💃 Stay classy, sassy and a bit bad-assey.",
          "📖📚 Here’s my story for the history books. 📚📖\n👑🏰 Supreme emperor of my realm. 🏰👑\n🌍🌵 Average in a world of savage. 🌵🌍\n🚫👗 Stress doesn’t go with my outfit. 👗🚫\n🌙🌌 This is not a nightmare, this is my life. 🌌🌙"
        ],
        "boys": [
          "tumare"
        ],
        "girls": [
          "ge"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660d5b559567aaaba9c06a32"
    },
    "title": "title2",
    "subTitle": [
      "subtitle1"
    ],
    "data": {
      "subtitle1": {
        "boys": [
          "data1"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e6245e2c9b29648eec1dd"
    },
    "title": "low",
    "subTitle": [
      "up"
    ],
    "data": {
      "up": {
        "unisex": [
          "secrets"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e6713e2c9b29648eec1f4"
    },
    "title": "joota",
    "subTitle": [
      "japani"
    ],
    "data": {
      "japani": {
        "boys": [
          "hindustani"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e6737e2c9b29648eec1fb"
    },
    "title": "million",
    "subTitle": [
      "hundred"
    ],
    "data": {
      "hundred": {
        "girls": [
          "divine"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e67cfe2c9b29648eec20a"
    },
    "title": "daaku",
    "subTitle": [
      "badshah"
    ],
    "data": {
      "badshah": {
        "boys": [
          "system"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e67ede2c9b29648eec219"
    },
    "title": "sadqay",
    "subTitle": [
      "neww"
    ],
    "data": {
      "neww": {
        "boys": [
          "baat ni\nbatu"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e6f48e2c9b29648eec2f8"
    },
    "title": "yo",
    "subTitle": [
      "aujla "
    ],
    "data": {
      "aujla ": {
        "boys": [
          "haha"
        ]
      }
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "660e6fb6e2c9b29648eec30f"
    },
    "title": "munda",
    "subTitle": [
      "mouj"
    ],
    "data": {
      "mouj": {
        "unisex": [
          "wwwbgh"
        ]
      }
    },
    "__v": 0
  }]
  function subcategorypopup(title, index = 0) {
    setSelectedIndex({ title, index });
    setIsPopupVisible(true);
  }

  function handlePopupClick() {
    setIsPopupVisible(false);
  }

  return (
    <>
      <div className="w-2/12 hidden sm:flex">
        <BioFontInstaCategory />
      </div>
      <div className="sm:w-10/12 dark:text-white w-11/12 m-auto">
        <h1 className="sm:p-5 text-6xl font-extrabold w-full text-center">
          Boys Captions for Instagram
        </h1>
        <div className="sm:flex justify-evenly border mt-2">
          <div className="text-center sm:hidden">
            <h2>Bio Instagram</h2>
            <ul className="flex overflow-auto py-3">
              {fetchdatabio.map((dat, ginti) => (
                <li
                  key={ginti}
                  className="border block hover:bg-[#cccccc] text-base font-medium p-1 items-center rounded-md cursor-pointer mx-1 px-2"
                  onClick={() => {
                    subcategorypopup(dat.title, ginti);
                  }}
                >
                  {dat.title}
                </li>
              ))}
            </ul>
          </div>
          <BioFontshow />
          <span className="hidden sm:flex">
            <BioFontInstaProfile />
          </span>
        </div>
      </div>
      <div
        className={`fixed left-0 right-0 mx-auto bottom-10 w-11/12 min-h-60 border border-black rounded-t-md  bg-[#212121] text-[#f1f1f1] ${isPopupVisible ? 'block translate-y-0' : ' translate-y-full'} transition sm:hidden `}
        onClick={handlePopupClick}
      >
        {isPopupVisible && (
          <>
          <div className='bg-gray-500 h-1 w-10 m-auto rounded-md my-4'></div>
          <div className=" block  mt-5">
            
            {fetchdatabio[selectedIndex.index].subTitle.map((subtitle, index) => (
              <Link key={index} to={`/bio/${selectedIndex.title}-${subtitle}`} className='block rounded-md text-2xl p-1   mt-2 ' >{subtitle}</Link>
            ))}
          </div>
          </>
        )}
      </div>
      <PreviewBio />
    </>
  );
}

export default BioFontcontent;