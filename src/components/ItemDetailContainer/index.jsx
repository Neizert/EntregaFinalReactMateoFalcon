import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";





const films = [
    { id: 1, category:"films", image: "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg", title: "Avatar" },
    { id: 2, category:"films", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-no-way-home-poster-fotogramas-1638214021.jpg", title : "Spiderman"},
    { id: 3, category:"films", image: "https://es.web.img2.acsta.net/pictures/21/08/31/16/41/4145554.jpg", title: "Venom"},
    { id: 4, category:"series", image: "https://images2.listindiario.com/imagen/2022/09/23/740/740163/680x460/202209231905181/merlina-la-serie-de-la-familia-addams-ya-tiene-fecha-en-netflix.jpeg", title: "Merlina"},
    { id: 5, category:"series", image: "https://flxt.tmsimg.com/assets/p22416085_b_v13_ac.jpg", title:"Cyberpunk"}
]



export const ItemDetailContainer = () =>{
   const [data,setData] = useState({});
   const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve =>{
            setTimeout(() =>{
                resolve(films);
            },1000);
        });

        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])   

    return (
        <ItemDetail data = {data}/>
    );
}

export default ItemDetailContainer;