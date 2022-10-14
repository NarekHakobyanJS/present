import React from "react";
import "./node.css";
import node from "./nodejs.jpg";
import np from './npm.jpg'

const Node = () => {
    return(
        <div className="node">
            <h1>Մեզ որպես Front end dev պետք է իմանալ Node.js?</h1>
            <img src={node} width={800}/>
            <p>
                իրականում ոչ բայց Node Js մեզ տրամադրումա հրամանրեր որոնց օգնությամբ մենք աշխատում ենք մեր Recct հետ            
            </p>
            <h2>NPM and NPX</h2>
            <p>
            npm ( node package manager) — ստանդարտ փաթեթների կառավարիչ է, որն ավտոմատ կերպով տեղադրվում է Node.js-ի հետ:
             Այն օգտագործվում է npm ամպային սերվերից փաթեթներ ներբեռնելու կամ այդ սերվերներում փաթեթներ վերբեռնելու համար:
            </p>
            <p>
            npx (node package executor) - թույլա տալիս առանց install անելու օգտագործել Pakgegn er և հետացնում npm i het asxhatane
            </p>
            <img src={np} />
        </div>
    )
}

export default Node;