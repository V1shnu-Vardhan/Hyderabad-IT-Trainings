import React, { useContext } from 'react';
import Comp2 from './Comp2';
import { createContext } from 'react';
export const context= createContext()

const Comp1 = () => {
    let isAdmin = "true"; // Use boolean valuesssss
    return (
        <div className='container p-5'>
            This is parent Component 1
            {/* Pass as prop */}
            <context.Provider value={isAdmin}>
            <Comp2  />

            </context.Provider>
            
        </div>
    );
};

export default Comp1;
