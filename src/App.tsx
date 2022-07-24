import Aside from "./components/Community/Aside";
import Main from "./components/Community/Main";

import style from "../styles/style.module.scss"
import "../styles/global.scss";

function App () {
  return (
    <div className={style.conteiner}>
      <Aside />
      <Main/>
    </div>
  )
}

export default App
