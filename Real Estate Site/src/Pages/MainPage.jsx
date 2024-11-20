import React from 'react';
import Header from '../Components/Header/Header'
import BodYOne  from '../Components/BodyOne/BodyOne';
import Properties from '../Components/PropertyDisplay/properties'
import SlideDisplay from '../Components/SlideDisplay/SlideDisplay'
import LandLordQuestion from '../Components/LandLordQuestion/LandLordQuestion'

const Page=()=>{
    return(
        <div>
           <Header/>
           <BodYOne/> 
           <Properties/>
           <SlideDisplay/>  
           <LandLordQuestion/>
        </div>
    );
};

export default Page;