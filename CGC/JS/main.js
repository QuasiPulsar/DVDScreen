const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;

const dvdgeometry = new THREE.PlaneGeometry( 0.3, 0.4 );
const dvdmaterial = new THREE.MeshBasicMaterial();

const dvd = new THREE.Mesh( dvdgeometry, dvdmaterial );
scene.add( dvd );

//Sir's tip
xSpeed = 0.005;
ySpeed = 0.002;
bouncesLeft = 8;
dvd.material.color.setRGB (Math.random(256), Math.random(256), Math.random(256));

function animate() {
	requestAnimationFrame( animate );
	//position
	dvd.position.x +=xSpeed;
	dvd.position.y +=ySpeed;

	//if x position
	if ( dvd.position.x > 0.85 )
	{
		xSpeed = -0.005;
		dvd.material.color.setRGB (Math.random(256), Math.random(256), Math.random(256));
		dvd.scale.x -= 0.1
		dvd.scale.y -= 0.1
		bouncesLeft--;
		console.log("Bounces Left: " + bouncesLeft);
	}
	else if (dvd.position.x < -0.85)
	{
		xSpeed = 0.005;
		dvd.material.color.setRGB (Math.random(256), Math.random(256), Math.random(256));
		dvd.scale.x -= 0.1
		dvd.scale.y -= 0.1
		bouncesLeft--;
		console.log("Bounces Left: " + bouncesLeft);
	}
	//if y position

	if ( dvd.position.y > 0.85 )
	{
		ySpeed = -0.002;
		dvd.material.color.setRGB (Math.random(256), Math.random(256), Math.random(256));
		dvd.scale.x -= 0.1
		dvd.scale.y -= 0.1
		bouncesLeft--;
		console.log("Bounces Left: " + bouncesLeft);
	}
	else if (dvd.position.y < -0.85)
	{
		ySpeed = 0.002;
		dvd.material.color.setRGB (Math.random(256), Math.random(256), Math.random(256));
		dvd.scale.x -= 0.1
		dvd.scale.y -= 0.1
		bouncesLeft--;
		console.log("Bounces Left: " + bouncesLeft);
	}	

	else if (bouncesLeft <= 0)
	{
		dvd.visible = false;
	}


	renderer.render( scene, camera );
}

animate();