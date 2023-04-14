import { createContext, useState } from "react";

// Picture Context stores the index of a picture from the list of available product pictures 
// that is being displayed to the user.
// When a user browses through the pictures,the mainPicture index changes with setMainPicture

export const PictureContext = createContext({
    mainPicture: 0,
    setMainPicture: () => {},
});

export const PictureProvider = ({children}) => {
    const [mainPicture, setMainPicture] = useState(0);
    const value = {mainPicture, setMainPicture};

    return <PictureContext.Provider value = {value}>{children}</PictureContext.Provider>
}