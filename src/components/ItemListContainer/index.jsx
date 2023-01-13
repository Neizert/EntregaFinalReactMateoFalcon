
import ItemList from "../ItemList";
import React, {useState, useEffect} from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';







export const ItemListContainer = ({texto}) => {
 
    const [data,setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
       
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
            .then(res => setData((res.docs.map(product => ({id: product.id, ...product.data()})))))
        } else{
            getDocs(queryCollection)
            .then(res => setData((res.docs.map(product => ({id: product.id, ...product.data()})))))
       }
    

    }, [categoriaId])

   

    return ( 
        <>
        <Title greeting = {texto} />  
        <ItemList data={data} />
        </>
    );
}


export default ItemListContainer;