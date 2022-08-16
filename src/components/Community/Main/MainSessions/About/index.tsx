import style from "./style.module.scss";

export default function AboutMe () {
    return (
        <div className={style.about}>
            <h2>Olá, Cleidson aqui.</h2>
            <p>
                Sou um baiano de 26 anos e Biomédico de formação.<br />
                No final de 2021 a programação entrou na minha vida e me encontro maravilhado com esse universo. Busco minha primeira oportunidade em um ambiente de trabalho no qual possa me desenvolver profissionalmente e mostrar o que aprendi nesse período.<br />
                Minha base de conhecimento principal é HTML, CSS, Javascript e React JS, porém, atualmente estou aprendendo sobre Vue Js, Next Js, Typescript, Node JS, bancos SQL e NoSQL.<br />
            </p>
        </div>
    )
}