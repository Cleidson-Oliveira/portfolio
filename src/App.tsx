import ResponsiveNavigation from "./components/Population/ResponsiveNavigation";
import Aside from "./components/Community/Aside";
import Main from "./components/Community/Main";
import { LanguageContextProvider } from "./contexts/Language/LanguageProvider";

import style from "../styles/style.module.scss"
import "../styles/global.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function App () {

  const [showAsidelikeMenuMobile, setShowAsideLikeMenuMobile] = useState(false);

  const laptopScreen = useMediaQuery({ query: '(min-width: 992px)' });

  const controlerMenuMobile = () => {
    setShowAsideLikeMenuMobile(prevState => !prevState);
  }

  useEffect(()=>{
    console.log(showAsidelikeMenuMobile, laptopScreen)
  },[showAsidelikeMenuMobile, laptopScreen])

  return (
    <LanguageContextProvider>
      <div className={style.conteiner}>
        <ResponsiveNavigation controlerMenuMobile={controlerMenuMobile}/>
        {(laptopScreen || showAsidelikeMenuMobile) && <Aside controlerMenuMobile={controlerMenuMobile}/>}
        <Main />
      </div>
    </LanguageContextProvider>
  )
}

export default App
