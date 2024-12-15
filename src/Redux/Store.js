import { configureStore } from "@reduxjs/toolkit";
import { mobileReducer } from "./Mobiles/MobileReducer";

export  const store = configureStore({reducer:mobileReducer})