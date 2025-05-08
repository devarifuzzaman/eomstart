import axios from "axios";
import { create } from "zustand";
import FeaturedOne from './../components/FeaturedOne';


const FeatureStore = create((set)=>{
    const featuredProducts = [];
    const getFeaturedProducts = async ()=>{
        try{
            const response = await axios.get('/api/products/featured');
            featuredProducts.replace(response.data);
        }catch(error){
            console.error(error);
        }
    }
    return {
        featuredProducts,
        getFeaturedProducts
    }
})