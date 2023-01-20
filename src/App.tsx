import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic';
import ResponsiveNavigation from "./components/ResponsiveNavigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { LanguageContextProvider } from "./contexts/Language/LanguageProvider";

import style from "./styles/style.module.scss"
import "./styles/global.scss";

function App () {

  const [showAsidelikeMenuMobile, setShowAsideLikeMenuMobile] = useState(false);

  const laptopScreen = useMediaQuery({ query: '(min-width: 992px)' });

  const controlerMenuMobile = () => {
    setShowAsideLikeMenuMobile(prevState => !prevState);
  }

  return (
    <PrismicProvider client={client}>
      <LanguageContextProvider>
        <div className={style.conteiner}>
          <ResponsiveNavigation controlerMenuMobile={controlerMenuMobile}/>
          {(laptopScreen || showAsidelikeMenuMobile) && <Aside controlerMenuMobile={controlerMenuMobile}/>}
          <Main />
        </div>
      </LanguageContextProvider>
    </PrismicProvider>
  )
}

export default App
