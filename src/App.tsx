import Aside from "./components/Aside";

import style from "./style.module.scss"
import "../styles/global.scss";

function App () {
  return (
    <div className={style.conteiner}>
      <Aside />
      <main></main>
    </div>
  )
}

export default App
