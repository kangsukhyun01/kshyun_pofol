// https://unpkg.com/
import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/jSy4oBlR8BSFc6XA/scene.splinecode');


let splineWrap=document.querySelector(".canvas-cont")
let splineItem=document.querySelector("#canvas3d")

gsap.set(splineItem,{
    xPercent:-55,
    yPercent:75,
    width:"50%",
    height:"50%",
})