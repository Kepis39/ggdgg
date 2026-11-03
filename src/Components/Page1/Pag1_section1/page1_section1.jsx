import classes from "./page1_section1.module.scss";
import { Photo } from "../../../Photo.js"

export default function Pag1_section1() {
  return (
    <>
      <section className={classes.sect1}>
        <div className={classes.very_big_container}>
            <div className={classes.left_container}>
              <div className={classes.text1}>
                <h1>Покупайте фриланс-услуги<br/> в <span>два клика</span></h1>
                </div>
                <div className={classes.text2}>
                <p>Ворк — единица работы продавца, которую <br/>
                можно купить как товар в магазине </p>
                </div>
                <div className={classes.Inputpole}>
                <input className={classes.slovo} type="text" placeholder="Что нужно сделать?"/>
                <button>Найти</button>
                </div>
                <div className={classes.text3}><p>Выберите рубрику, чтобы начать</p></div>
                <div className={classes.container}>
                  <div className={classes.knopki}>
                    <button>Тексты и переводы </button>
                    <button>Разработка </button>
                    <button>Дизайн </button>
                  </div>
                  <div className={classes.knopki}>
                  <button>Аудио, видео монтаж </button>
                  <button>SEO и оптимизация</button>
                  </div>
                  <div className={classes.knopki}>
                    <button>Бизнес и жизнь</button>
                    <button>Соцсети и реклама</button>
                    <button>Все категории</button>
                  </div>
                </div>
            </div>
            <div className={classes.right_container}>
              <img src={Photo.Groudqdq}/>
            </div>
        </div>
      </section>
    </>
  );
}