import React from 'react';

export const PetfulContext = React.createContext({
    catsQ:null,
    dogsQ:null,
    adoptCat: ()=>{},
    adoptDog:()=>{}
})