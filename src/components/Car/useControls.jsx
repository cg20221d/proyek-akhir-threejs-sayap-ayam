import { useEffect, useState } from "react";

export const useControls = (vehicleAPI, chassisAPI) => {
    let [controls, setControls] = useState({
    });

    const speed = 150;
    const frontTurn = 0.76;
    const backTurn = 0;

    useEffect(() => {
        const keyDownHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true
            }));
            console.log(e.key.toLowerCase());
        }

        const keyUpHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: false
            }));
            console.log(e.key.toLowerCase());
        }

        window.addEventListener("keydown", keyDownHandler);
        window.addEventListener("keyup", keyUpHandler);
    }, []);

    useEffect(() => {
        if(controls.w){
            vehicleAPI.applyEngineForce(speed, 2);
            vehicleAPI.applyEngineForce(speed, 3);
        }else if(controls.s){
            vehicleAPI.applyEngineForce(-speed, 2);
            vehicleAPI.applyEngineForce(-speed, 3);
        }else {
            vehicleAPI.applyEngineForce(0, 2);
            vehicleAPI.applyEngineForce(0, 3);
        }

        if(controls.a){
            vehicleAPI.setSteeringValue(frontTurn, 2);
            vehicleAPI.setSteeringValue(frontTurn, 3);
            vehicleAPI.setSteeringValue(-backTurn, 0);
            vehicleAPI.setSteeringValue(-backTurn, 1);
        }else if(controls.d){
            vehicleAPI.setSteeringValue(-frontTurn, 2);
            vehicleAPI.setSteeringValue(-frontTurn, 3);
            vehicleAPI.setSteeringValue(backTurn, 0);
            vehicleAPI.setSteeringValue(backTurn, 1);
        }else {
            for(let i = 0; i < 4; i++) vehicleAPI.setSteeringValue(0, i);
        }
    }, [controls, vehicleAPI, chassisAPI])

    return controls;
}