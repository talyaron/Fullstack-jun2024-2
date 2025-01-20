import { useState } from "react"
import { Balloon } from "../../model/BallonModel"

export function BalloonMV() {

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const [balloon, setBallon] = useState<Balloon[]>([
        {
            id: crypto.randomUUID(),
            imgUrl: 'https://img.freepik.com/free-psd/ballon-with-beautiful-color_23-2151865558.jpg?semt=ais_hybrid',
            xPosition: Math.floor(Math.random() * screenWidth - 100),
            yPosition: Math.floor(Math.random() * screenHeight),
        },
        {
            id: crypto.randomUUID(),
            imgUrl: 'https://d1ymz67w5raq8g.cloudfront.net/Pictures/280xAny/8/4/9/130849_shutterstock_154269866.jpg',
            xPosition: Math.floor(Math.random() * screenWidth - 100),
            yPosition: Math.floor(Math.random() * screenHeight),
        },
        {
            id: crypto.randomUUID(),
            imgUrl: 'https://thetinytassel.com/cdn/shop/files/Latex_Orange_Balloon_1200x.png?v=1723067840',
            xPosition: Math.floor(Math.random() * screenWidth - 100),
            yPosition: Math.floor(Math.random() * screenHeight),
        },
    ])

    return {
        balloon, setBallon
    }
}