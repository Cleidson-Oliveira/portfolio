import ResponsiveNavigation from "./components/Population/ResponsiveNavigation";
import Aside from "./components/Community/Aside";
import Main from "./components/Community/Main";
import { LanguageContextProvider } from "./contexts/Language/LanguageProvider";

import style from "../styles/style.module.scss"
import "../styles/global.scss";

function App () {
  return (
    <LanguageContextProvider>
      <div className={style.conteiner}>
        <ResponsiveNavigation />
        <Aside />
        <Main/>
      </div>
    </LanguageContextProvider>
  )
}

export default App
