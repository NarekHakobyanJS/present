import React from "react";
import cdn from "./cdn.png";
import "./cra.css";
import cra from "./cra.jpg";
import cddn from "../../img/cddn.jpg";
import crra from "../../img/crra.jpg";
import In from "../../img/in.jpg";
import ind from "../../img/ind.jpg";
import inde from "../../img/inde.jpg";
import index from "../../img/index.jpg";
import a from "../../img/a.jpg";
import b from "../../img/b.jpg";
import d from "../../img/d.jpg";
import e from "../../img/e.jpg";
import f from "../../img/f.jpg";
import j from "../../img/r.jpg";
import r from "../../img/j.jpg";

const Cra = () => {
    return(
        <div className="cra">
            <h1>Ինչ ձևերով աշխատել React ի հետ</h1>
            <div>
                <h2>օգտագործելով CDN</h2>
                <img src={cdn} width={900}/>
                <p>
                Երկու լինկերեն նրա համար որ կարենանաք ոչմիայն browserում օգտագործենք 
                </p>
            </div>
            <div>
                <h2>Create React App</h2>
                <p>
                Create React App-ը հիանալի միջավայր է React-ը սովորելու համար և լավագույն միջոցը՝ սկսելու նոր React մեկ էջի հավելված ստեղծելու համար:

Գործիքը ստեղծում է միջավայր՝ օգտագործելու JavaScript-ի վերջին հնարավորությունները, օպտիմիզացնում է հավելվածը արտադրության համար և ապահովում է հարմարավետ փորձ մշակման ընթացքում: Ձեզ անհրաժեշտ կլինի Node.js 14.0.0 կամ ավելի նոր տարբերակ և npm 5.6 կամ ավելի ուշ ձեր սարքում: Նախագիծ ստեղծելու համար գործարկեք հրամանները.
                </p>
                <img src={cra} width={900}/>
                <p>
                Create React App не обрабатывает бэкенд логику или базы данных, он только предоставляет команды для сборки фронтенда, поэтому вы можете использовать его с любым бэкэндом. «Под капотом» используются Babel и webpack, но вам не нужно ничего знать о них.

Когда ваше приложение готово к развёртыванию в продакшене, запуск команды npm run build создаст оптимизированную сборку вашего приложения в папке build. Вы можете узнать больше о Create React App из его README и его пользовательского руководства.
                </p>
                <img src={cddn} width={800}/>
                <img src={crra} width={800}/>
            </div>
            <div>
                <h1>Ինչենք ստանում ?</h1>
                <p>
ֆիլտրենք անում 
18:11

Բացենք index js 
18: 59

Npm 

20:07
Երկու գրադարանների import ները
20:17
20:26
Const root = React.DOM.createElement 
22:17
ReactDOM.createRoot methods enq 
Կանչում 
Root.render() 
ֆունկցիաննեենք կանչում 

                </p>
                <img src={In} width={800}/>
                <img src={ind} width={800}/>
                <img src={inde} width={800}/>
                <img src={index} width={800}/>
                <img src={a} width={800}/>
                <img src={b} width={800}/>
                <img src={d} width={800}/>
                <img src={e} width={800}/>
                <img src={f} width={800}/>
                <img src={r} width={800}/>
                <img src={j} width={800}/>
            </div>
        </div>
    )
}

export default Cra