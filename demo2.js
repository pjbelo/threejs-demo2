// demo2.js

var camera, scene, renderer;
var geometry, material, box, controls;

init();
animate();

function init() {

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry();
	material = new THREE.MeshNormalMaterial();
	box = new THREE.Mesh( geometry, material );
    scene.add( box );
    
    var fov = 70;
    var aspect = window.innerWidth / window.innerHeight;
    var near = 0.10;
    var far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 4;

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth * 0.9, window.innerHeight * 0.9 );
	document.body.appendChild( renderer.domElement );
	// instantiate OrbitControls 
	controls = new THREE.OrbitControls( camera, renderer.domElement );

}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

// controls.update() must be called after any manual changes to the camera's transform
// If damping or auto-rotate are enabled, you must call controls.update() in your animation loop

