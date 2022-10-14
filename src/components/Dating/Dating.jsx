import React from "react";
import "./dating.css";
import diagram from "../../img/diagrama.jpg";
import multi from "../../img/multi.jpg";
import comp from "../../img/comp.jpg";
import c from "../../img/c.jpg";

const Dating = () => {
    return(
        <div>
            <div className="dating">
            <h1>1.Ինչ է React-ը? և Ինչու սովորել հենց React?</h1>
               <div className="dating1">
                    
                    <b>React (երբեմն ձևակերպված է React.js կամ ReactJS), բաց կոդով JavaScript գրադարան է user ինտերֆեյս կառուցելու համար։</b>
                    <p>
                        1.1 - React ստեղծվել է Ֆեյսբուքի կողմից 2013 թվականին և սպասարկվում է նրա կողմից, որը ապահովում է այս նախագծի երկարատև կյանքը։
                    </p>
                    <p>
                        1.2 - React - ով գրված ծրագրերը ավելի շատ են քան նրա մրցակիցներինը(Vuejs, Angular)
                    </p>
                    <p>
                        1.3 - React ծրագրավորողները ավելի բարձր են վարձատրվում և ավելի պահանջված են։
                    </p>
                    <p>
                        1․4 - React-ը հեշտե միացնել արդեն պատրաստի նախագծերին
                    </p>
               </div>
            <h1>2.Ինչն է React-ին դարձրել պահանջված և սիրված?</h1>
               <div className="dating2">
                <p>
                    2.1 - Արագություն շնորհիվ են մեխանիզմին որը կոչվումա Virtual-Dom 
                </p>
                <p>
                    2.2 - Componenet - երի մոտեցումը
                </p>
                <p>
                    2.3 - SPA - հասկաղողություննը
                </p>
                <p>
                    2.4 - Հեշտա միացնել արդեն պատրաստի նախագծերին 
                </p>
                <p>
                    2.5 - Դեկլարատիվնի մոտեցում
                    Ինչ անել ?
                    Մենք ասոմենք ոնց անի անումա 
                </p>
               </div>
                <img src={diagram} width={800}/>
                <p>
                React Գրադարան է ինտերֆեյսներ ստեղծելու համար։ Ֆրեյմորկը մի քանի գրադարան է որը ունի իր կոնկրետ առխիտեկտուրան ու իր օրենքները Գրադարանը ծրագրավորողին տալիսա ավելի մեծ ազատություն։ Այսինքն առխիտեկտուրան մենքենք մտածում պապկեքի դասաորություն և այլն և այլն
                </p>
            </div>
            <div className="dating3">
                <h1>Մի քանի բառով ինչա կոմպոնենետը</h1>
                <p>
                Կոմպոնենտերի մոտեցում 
Նախկինում էջերը լիքը հտմլ երերր բերում  կոդի կրկնում եր լինում 
React ը լուծումա ետ խնդիրը կոմպոնենտներով ունենք կնոպկա որը նույնա անումենք մի անգամ ու օգտագործումենք լիքը տեղեր

                </p>
                <img src={multi} />
                <img src={comp} />
                <img src={c} />
            </div>
        </div>
    )
}

export default Dating