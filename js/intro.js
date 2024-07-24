import * as THREE from "https://esm.sh/three@0.151.3"

import {
    OrbitControls
} from "https://esm.sh/three@0.151.3/addons/controls/OrbitControls.js"
import {
    OutlineEffect
} from "https://esm.sh/three@0.151.3/addons/effects/OutlineEffect.js"
import {
    GLTFLoader
} from "https://esm.sh/three@0.151.3/examples/jsm/loaders/GLTFLoader.js"

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()
const textureLoader = new THREE.TextureLoader()
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const loading = document.querySelector('#loader')

// Base camera
const camera = new THREE.PerspectiveCamera(10, sizes.width / sizes.height, 0.1, 500)
camera.position.x = 8
camera.position.y = 4      //4
camera.position.z = 22.5    //15
scene.add(camera)

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = false
controls.enablePan = true
controls.minDistance = 18
controls.maxDistance = 50
controls.minPolarAngle = Math.PI / 5
controls.maxPolarAngle = Math.PI / 2

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding

// Materials
const bakedTexture = textureLoader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room13/f6d2eeb487a3d1bcd9944e23621c21f60055b280/static/baked-alt.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding

const bakedMaterial = new THREE.MeshBasicMaterial({
    map: bakedTexture,
    side: THREE.DoubleSide
})

bakedMaterial.userData.outlineParameters = {
    thickness: .003,
    color: [0, 0, 0],
    alpha: 1,
    keepAlive: true,
    visible: true
}

//Loader
let model;
const loader = new GLTFLoader()
loader.load('https://rawcdn.githack.com/ricardoolivaalonso/ThreeJS-Room13/47b05e2db4e49eec33d63729e920894a906cb693/static/model.glb',
    (gltf) => {
        model = gltf.scene
        model.traverse(child => {
            if (child.isMesh) {
                child.material = bakedMaterial
            }
        })
        scene.add(model)
        scene.position.set(0, .2, 0)
    },
    (xhr) => {
        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
    }
)

// Animation
const minPan = new THREE.Vector3(-5, -2, -5)
const maxPan = new THREE.Vector3(5, 2, 5)
const effect = new OutlineEffect(renderer)

const tick = () => {
    controls.update()
    controls.target.clamp(minPan, maxPan)

    // Add rotation to the model
    if (model) {
        model.rotation.y += 0.002; // 0.002 Adjust the rotation speed as needed
    }

    effect.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})
