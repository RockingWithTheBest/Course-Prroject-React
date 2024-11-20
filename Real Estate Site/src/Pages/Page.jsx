import React from 'react';
import Header from '../Components/Header/Header'
import BodYOne  from '../Components/BodyOne/BodyOne';
import Properties from '../Components/PropertyDisplay/properties'
import SlideDisplay from '../Components/SlideDisplay/SlideDisplay'

const Page=()=>{
    return(
        <div>
           <Header/>
           <BodYOne/> 
           <Properties/>
           <SlideDisplay/>  
        </div>
    );
};

export default Page;