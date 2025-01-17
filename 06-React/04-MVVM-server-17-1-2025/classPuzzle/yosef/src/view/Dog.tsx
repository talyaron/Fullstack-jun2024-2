import React from "react";
import { useDogVM } from "./DogVM";

const Dog = () => {
    const { dog , fetchDog} = useDogVM
