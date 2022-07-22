import Aside from "./components/Aside";
import Main from "./components/Main";

import style from "./style.module.scss"
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
