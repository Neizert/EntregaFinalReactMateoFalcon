import React,{useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';








export const ItemDetailContainer = () =>{
   const [data,setData] = useState({});
   const {detalleId} = useParams();

    useEffect(() => {
        const querdydb = getFirestore();
        const queryDoc = doc(querdydb,'products', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data() }))
    }, [detalleId])   

    return (
        <ItemDetail data = {data}/>
    );
}

export default ItemDetailContainer;