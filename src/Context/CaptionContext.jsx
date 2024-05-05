"use client"
import { createContext, useEffect, useState } from "react";

const Caption = createContext()

const CaptionProvider = ({ children }) => {
    const [sntSubTitle, SetSubTitle] = useState({ subtitle: 'instagram', title: 0 })
    const [data, setData] = useState([]);
    const [fetchdatabio, setBioData] = useState([]);
    const [PreviewCaption, setPreviewCaption] = useState('g');
    const [bioshow, setbioshow] = useState('InstaBioFonts\nFree Tools\nEnjoy.');
    let [sideBar, SetSidebar] = useState(false);
    const toggleSidebar = (value) => {
        SetSidebar(value);
      };

    useEffect(() => {
        const fetchData = () => {
            try {
                fetch('http://localhost:5000/api/getData')
                    .then(response => response.json())
                    .then(res => {
                        const { captiondata, biofontdata } = res
                        setData(captiondata)
                        setBioData(biofontdata)
                    })

                // .catch(err => console.error(err));
            } catch (err) {
                // console.error(err);
            }
        };
        fetchData();
    }, []);



    return (
        <Caption.Provider value={{ sideBar, SetSidebar,toggleSidebar, setbioshow, bioshow, sntSubTitle, SetSubTitle, data, fetchdatabio, PreviewCaption, setPreviewCaption }}>
            {children}
        </Caption.Provider>
    )
}

export { Caption, CaptionProvider };
