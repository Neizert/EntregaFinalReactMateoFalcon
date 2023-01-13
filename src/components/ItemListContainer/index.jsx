import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";
import Title from "../Title";


const films = [
    { id: 1, image: "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg", title: "Avatar" },
    { id: 2, image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-no-way-home-poster-fotogramas-1638214021.jpg", title : "Spiderman"},
    { id: 3, image: "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg", title: "Venom"},
]




export const ItemListContainer = ({texto}) => {
 
    const [data,setData] = useState([]);

    useEffect(() =>{
       const getData = new Promise(resolve => {
        setTimeout(()=> {
        resolve(films);
        }, 1000);
       });
    getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }

    return ( 
        <>
        <Title greeting = {texto} />
        <ItemCount initial = {1} stock = {5} onAdd = {onAdd} />
        <ItemList data={data} />
        </>
    );
}


export default ItemListContainer;