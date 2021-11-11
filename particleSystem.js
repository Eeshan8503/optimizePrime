var rendererr, scenee, cameraa, composerr, particlee;

window.onload = function() {
  init();
  animate();
}

function init() {
  document.getElementById('canvass').appendChild(rendererr.domElement);

  scenee = new THREE.Scene();

  cameraa = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  cameraa.position.z = 400;
  scenee.add(cameraa);

  circle=new THREE.Object3D();
  particlee = new THREE.Object3D();

 
  scenee.add(particlee);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  

  var material = new THREE.MeshPhongMaterial({
    color: 0x000000,
    shading: THREE.FlatShading
  });

  for (var i = 0; i < 1000; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 700));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particlee.add(mesh);
  }
  var ambientLight = new THREE.AmbientLight(0x999999 );
  scenee.add(ambientLight);
  
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0x000000, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0xFF0000, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0x0000FF, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scenee.add( lights[0] );
scenee.add( lights[1] );
scenee.add( lights[2] );
  

  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  cameraa.aspect = window.innerWidth / window.innerHeight;
  cameraa.updateProjectionMatrix();
  rendererr.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particlee.rotation.x += 0.0000;
  particlee.rotation.y -= 0.0040;
  rendererr.clear();

  rendererr.render( scenee, cameraa )
};
