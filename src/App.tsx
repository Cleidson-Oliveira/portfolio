import ResponsiveNavigation from "./components/Population/ResponsiveNavigation";
import Aside from "./components/Community/Aside";
import Main from "./components/Community/Main";

import style from "../styles/style.module.scss"
import "../styles/global.scss";

function App () {
  return (
    <div className={style.conteiner}>
      <ResponsiveNavigation />
      <Aside />
      <Main/>
    </div>
  )
}

export default App
