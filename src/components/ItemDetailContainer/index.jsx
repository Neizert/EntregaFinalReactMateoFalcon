import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";

const film = { id: 1, image: "https://es.web.img3.acsta.net/pictures/22/11/02/15/37/0544148.jpg", title: "Avatar" };


export const ItemDetailContainer = () =>{
   const [data,setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve =>{
            setTimeout(() =>{
                resolve(film);
            },1000);
        });

        getData.then(res => setData(res));
    }, [])   

    return (
        <ItemDetail data = {data}/>
    );
}

export default ItemDetailContainer;