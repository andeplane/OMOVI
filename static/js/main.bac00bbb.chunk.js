(this["webpackJsonpomovi-example"]=this["webpackJsonpomovi-example"]||[]).push([[0],{18:function(e,n,r){e.exports=r(26)},19:function(e,n,r){},25:function(e,n,r){},26:function(e,n,r){"use strict";r.r(n);r(19);var t,i=r(7),a=r.n(i),l=r(15),o=r.n(l),s=r(11),u=r.n(s),c=r(12),m=r(9),d=r(16),f=r(0),g=r(3),v=r(1),p=r(2),h=r(6),b=r(17),_=r.n(b),x=function(e){Object(v.a)(r,e);var n=Object(p.a)(r);function r(e,t){var i;return Object(f.a)(this,r),(i=n.call(this,t)).materialType=e,i.uniforms={},i.extensions={},i}return Object(g.a)(r,[{key:"copy",value:function(e){h.MeshPhongMaterial.prototype.copy.call(this,e);var n=e;return this.type=n.type,this.defines=Object(d.a)({},n.defines),this.uniforms=n.uniforms,this.onBeforeCompile=n.onBeforeCompile,this}},{key:"clone",value:function(){var e=new h.MeshPhongMaterial;return r.prototype.copy.call(e,this),e}}]),r}(h.MeshPhongMaterial),y={},w=new h.Matrix4,M=new h.Matrix4,P=new h.Matrix3,j=new h.Matrix3,C=function e(n){var r=this;Object(f.a)(this,e),this.add=function(e){if(e.material instanceof x){var n=e.material,t=n.type;null==r.materials[t]&&(r.materials[t]=n)}r.object.add(e)},this.remove=function(e){r.object.remove(e)},this.setupLights=function(e,n,r){e.intensity=.3,n.intensity=.7,r.add(n),r.add(e)},this.setupCanvas=function(e){e.style.width="640px",e.style.height="480px",e.style.minWidth="100%",e.style.minHeight="100%",e.style.maxWidth="100%",e.style.maxHeight="100%"},this.setupCamera=function(e){e.position.set(10,10,10),e.lookAt(new h.Vector3(0,0,0))},this.updateUniforms=function(e){r.object.matrixWorld.copy(r.object.matrixWorld).invert(),M.copy(e.matrixWorldInverse).multiply(r.object.matrixWorld),P.getNormalMatrix(M),j.copy(P).invert(),Object.values(r.materials).forEach((function(e){null!=e.uniforms.inverseModelMatrix&&e.uniforms.inverseModelMatrix.value.copy(w),null!=e.uniforms.inverseNormalMatrix&&e.uniforms.inverseNormalMatrix.value.copy(j)}))},this.animate=function(){r.resizeIfNeeded(),r.controls.update(r.clock.getDelta()),r.updateUniforms(r.camera),r.renderer.render(r.scene,r.camera),r.latestRequestId=requestAnimationFrame(r.animate.bind(r))},this.resizeIfNeeded=function(){var e=r.renderer.getSize(new h.Vector2),n=e.width,t=e.height,i=0!==r.domElement.clientWidth?r.domElement.clientWidth:r.canvas.clientWidth,a=0!==r.domElement.clientHeight?r.domElement.clientHeight:r.canvas.clientHeight,l=window.devicePixelRatio*i,o=window.devicePixelRatio*a,s=l*o,u=s>14e5?Math.sqrt(14e5/s):1,c=l*u,m=o*u;return!(Math.abs(n-c)<.1&&Math.abs(t-m)<.1)&&(r.renderer.setSize(c,m),function(e,n,r){e instanceof h.PerspectiveCamera&&(e.aspect=n/r),e.updateProjectionMatrix()}(r.camera,c,m),!0)},this.renderer=new h.WebGLRenderer,this.canvas=this.renderer.domElement,this.domElement=n,this.domElement.appendChild(this.canvas),this.setupCanvas(this.canvas),this.scene=new h.Scene,this.ambientLight=new h.AmbientLight(16777215),this.directionalLight=new h.DirectionalLight(16777215),this.setupLights(this.ambientLight,this.directionalLight,this.scene),this.camera=new h.PerspectiveCamera(60,640/480,.1,1e4),this.setupCamera(this.camera),this.controls=new _.a(this.camera,this.canvas),this.latestRequestId=void 0,this.clock=new h.Clock,this.object=new h.Object3D,this.scene.add(this.object),this.materials={},this.animate()},E=function(e){var n=e.particles,r=Object(i.useRef)(null),l=Object(i.useState)(void 0),o=Object(m.a)(l,2),s=o[0],u=o[1];Object(i.useEffect)((function(){r.current&&!t&&(t=new C(r.current),u(t))}),[r,s]);var c=Object(i.useRef)();Object(i.useEffect)((function(){c.current=n}));var d=c.current;return Object(i.useEffect)((function(){s&&(d&&s.remove(d.getMesh()),s.add(n.getMesh()))}),[n,s]),a.a.createElement("div",{style:{height:"100%",width:"100%"}},a.a.createElement("div",{style:{height:"100%",width:"100%"},ref:r}))},S=function(){function e(n){var r=this;Object(f.a)(this,e),this.getRadius=function(e){return r.radii[e]},this.getPosition=function(e){return new h.Vector3(r.positions[3*e+0],r.positions[3*e+1],r.positions[3*e+2])},this.getGeometry=function(){var e=new h.PlaneBufferGeometry(1,1,1,1),n=new h.InstancedBufferGeometry;return n.instanceCount=r.numParticles,n.setIndex(e.getIndex()),n.setAttribute("position",e.getAttribute("position")),n.setAttribute("normal",e.getAttribute("normal")),n.setAttribute("particlePosition",new h.InstancedBufferAttribute(r.positions,3,!1,1)),n.setAttribute("particleRadius",new h.InstancedBufferAttribute(r.radii,1,!1,1)),n},this.getMesh=function(){if(null!=r.mesh)return r.mesh;var e=r.getGeometry(),n=function(e,n,r){if(null!=y[e])return y[e];var t=new x(e,{color:16711680});return t.uniforms.inverseModelMatrix={value:new h.Matrix4},t.uniforms.inverseNormalMatrix={value:new h.Matrix3},t.onBeforeCompile=function(e){Object.assign(e.uniforms,t.uniforms),t.uniforms=e.uniforms,e.vertexShader=n,e.fragmentShader=r},t.onBeforeCompile.toString=function(){return e},y[e]=t,t}("particle","\n#define PHONG\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\nuniform mat4 inverseModelMatrix;\nattribute vec3 particlePosition;\nattribute float particleRadius;\n\nvarying vec3 vSurfacePoint;\nvarying vec3 vCenter;\nvarying float vRadius;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvec3 makePerpendicular(vec3 v) {\n    if(v.x == 0.0 && v.y == 0.0) {\n        if(v.z == 0.0) {\n            return vec3(0.0, 0.0, 0.0);\n        }\n        return vec3(0.0, 1.0, 0.0);\n    }\n    return vec3(-v.y, v.x, 0.0);\n}\n\nvec3 mul3(mat4 M, vec3 v) {\n\tvec4 u = M * vec4(v, 1.0);\n\treturn u.xyz / u.w;\n}\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t\n    vec4 mvPosition = vec4( transformed, 1.0 );\n\n    #ifdef USE_INSTANCING\n\n\tvec3 objectToCameraModelSpace = (inverseModelMatrix*vec4(particlePosition - cameraPosition, 1.0)).xyz;\n    vec3 view = normalize(objectToCameraModelSpace);\n    vec3 right = normalize(makePerpendicular(view));\n    vec3 up = cross(right, view);\n\t\n\t// Factor 2.0 is because geometry is 0.5x\n\tvec3 displacement = 2.0*particleRadius*(position.x * right + position.y * up);\n\t// particlePosition + displacement is the current vertex, also move closer to camera so billboard covers the sphere\n\ttransformed = particlePosition + displacement - particleRadius * view;\n\t\n\tvSurfacePoint = mul3(modelViewMatrix, transformed);\n    vCenter = mul3(modelViewMatrix, particlePosition);\n\tvRadius = particleRadius;\n    #endif\n\n    mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n    gl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n","\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\nvarying vec3 vSurfacePoint;\nvarying vec3 vCenter;\nvarying float vRadius;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 rayTarget = vSurfacePoint;\n\tvec3 rayDirection = normalize(rayTarget); // rayOrigin is (0,0,0) in camera space\n\n\tvec3 diff = rayTarget - vCenter.xyz;\n    vec3 E = diff;\n    vec3 D = rayDirection;\n\n    float a = dot(D, D);\n    float b = dot(E, D);\n    float c = dot(E, E) - vRadius*vRadius;\n\n    // discriminant of sphere equation (factor 2 removed from b above)\n    float d = b*b - a*c;\n    if(d < 0.0)\n        discard;\n\t\n    float sqrtd = sqrt(d);\n    float dist1 = (-b - sqrtd)/a;\n    float dist2 = (-b + sqrtd)/a;\n\n    // Make sure dist1 is the smaller one\n    if (dist2 < dist1) {\n        float tmp = dist1;\n        dist1 = dist2;\n        dist2 = tmp;\n    }\n\n    float dist = dist1;\n    float intersectionPointZ = E.z + dist*D.z;\n\tvec3 p = rayTarget + dist*rayDirection;\n\n\t// Find normal vector in local space\n    normal = normalize(vec3(p - vCenter.xyz));\n    // Transform into camera space\n    if (dot(normal, rayDirection) >  0.) {\n        normal = -normal;\n    }\n\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n");r.mesh=new h.InstancedMesh(e,n,r.numParticles);for(var t=new h.Matrix4,i=0;i<r.numParticles;i++)r.mesh.setMatrixAt(i,t),r.mesh.setColorAt(i,r.colors[i]);return r.mesh.frustumCulled=!1,r.mesh},this.positions=new Float32Array(3*n),this.indices=new Float32Array(n),this.radii=new Float32Array(n),this.colors=[],this.numParticles=0,this.capacity=n,this.mesh=void 0}return Object(g.a)(e,[{key:"addParticle",value:function(e,n,r,t){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(this.numParticles!==this.capacity){var o=this.numParticles;this.positions[3*o+0]=e,this.positions[3*o+1]=n,this.positions[3*o+2]=r,this.colors.push(new h.Color(i/255,a/255,l/255)),this.radii[o]=.25*t,this.indices[o]=o,this.numParticles+=1}else console.log("Warning, can't add particle because arrays are full")}}]),e}(),O={H:{fullname:"hydrogen",radius:1.2,color:{r:204,g:204,b:204}},He:{fullname:"helium",radius:1.4,color:{r:217,g:255,b:255}},Li:{fullname:"lithium",radius:1.82,color:{r:204,g:128,b:255}},Be:{fullname:"beryllium",radius:1.53,color:{r:194,g:255,b:0}},B:{fullname:"boron",radius:1.92,color:{r:255,g:181,b:181}},C:{fullname:"carbon",radius:1.7,color:{r:80,g:80,b:80}},N:{fullname:"nitrogen",radius:1.55,color:{r:48,g:80,b:248}},O:{fullname:"oxygen",radius:1.52,color:{r:170,g:0,b:0}},F:{fullname:"fluorine",radius:1.35,color:{r:144,g:224,b:80}},Ne:{fullname:"neon",radius:1.54,color:{r:48,g:80,b:248}},Na:{fullname:"sodium",radius:2.27,color:{r:171,g:92,b:242}},Mg:{fullname:"magnesium",radius:1.73,color:{r:138,g:255,b:0}},Al:{fullname:"aluminium",radius:1.84,color:{r:191,g:166,b:166}},Si:{fullname:"silicon",radius:2.27,color:{r:240,g:200,b:160}},P:{fullname:"phosphorus",radius:1.8,color:{r:255,g:128,b:0}},S:{fullname:"sulfur",radius:1.8,color:{r:255,g:255,b:48}},Cl:{fullname:"chlorine",radius:1.75,color:{r:31,g:240,b:31}},Ar:{fullname:"argon",radius:1.88,color:{r:128,g:209,b:227}},K:{fullname:"potassium",radius:2.75,color:{r:143,g:64,b:212}},Ca:{fullname:"calcium",radius:2.31,color:{r:61,g:255,b:0}},Sc:{fullname:"scandium",radius:2.11,color:{r:230,g:230,b:230}},Ti:{fullname:"titanium",radius:2,color:{r:191,g:194,b:199}},V:{fullname:"vanadium",radius:2,color:{r:166,g:166,b:171}},Cr:{fullname:"chromium",radius:2,color:{r:138,g:153,b:199}},Mn:{fullname:"manganese",radius:2,color:{r:156,g:122,b:199}},Fe:{fullname:"iron",radius:2,color:{r:224,g:102,b:51}},Co:{fullname:"cobalt",radius:2,color:{r:240,g:144,b:160}},Ni:{fullname:"nickel",radius:1.63,color:{r:80,g:208,b:80}},Cu:{fullname:"copper",radius:1.4,color:{r:200,g:128,b:51}},Zn:{fullname:"zinc",radius:1.39,color:{r:125,g:128,b:176}},Ga:{fullname:"gallium",radius:1.87,color:{r:194,g:143,b:143}},Ge:{fullname:"germanium",radius:2.11,color:{r:102,g:143,b:143}},As:{fullname:"arsenic",radius:1.85,color:{r:189,g:128,b:227}},Se:{fullname:"selenium",radius:1.9,color:{r:255,g:161,b:0}},Br:{fullname:"bromine",radius:1.85,color:{r:166,g:41,b:41}},Kr:{fullname:"krypton",radius:2.02,color:{r:92,g:184,b:209}},Rb:{fullname:"rubidium",radius:3.03,color:{r:112,g:46,b:176}},Sr:{fullname:"strontium",radius:2.49,color:{r:0,g:255,b:0}},Y:{fullname:"yttrium",radius:2,color:{r:148,g:255,b:255}},Zr:{fullname:"zirconium",radius:2,color:{r:148,g:224,b:224}},Nb:{fullname:"niobium",radius:2,color:{r:115,g:194,b:201}},Mo:{fullname:"molybdenum",radius:2,color:{r:84,g:181,b:181}},Tc:{fullname:"technetium",radius:2,color:{r:59,g:158,b:158}},Ru:{fullname:"ruthenium",radius:2,color:{r:36,g:143,b:143}},Rh:{fullname:"rhodium",radius:2,color:{r:10,g:125,b:140}},Pd:{fullname:"palladium",radius:1.63,color:{r:0,g:105,b:133}},Ag:{fullname:"silver",radius:1.72,color:{r:192,g:192,b:192}},Cd:{fullname:"cadmium",radius:1.58,color:{r:255,g:217,b:143}},In:{fullname:"indium",radius:1.93,color:{r:166,g:117,b:115}},Sn:{fullname:"tin",radius:2.17,color:{r:102,g:128,b:128}},Sb:{fullname:"antimony",radius:2.06,color:{r:158,g:99,b:181}},Te:{fullname:"tellurium",radius:2.06,color:{r:212,g:122,b:0}},I:{fullname:"iodine",radius:1.98,color:{r:148,g:0,b:148}},Xe:{fullname:"xenon",radius:2.16,color:{r:66,g:158,b:176}},Cs:{fullname:"caesium",radius:3.43,color:{r:87,g:23,b:143}},Ba:{fullname:"barium",radius:2.68,color:{r:0,g:201,b:0}},La:{fullname:"lanthanum",radius:2,color:{r:112,g:212,b:255}},Ce:{fullname:"cerium",radius:2,color:{r:255,g:255,b:199}},Pr:{fullname:"praseodymium",radius:2,color:{r:217,g:255,b:199}},Nd:{fullname:"neodymium",radius:2,color:{r:199,g:255,b:199}},Pm:{fullname:"promethium",radius:2,color:{r:163,g:255,b:199}},Sm:{fullname:"samarium",radius:2,color:{r:143,g:255,b:199}},Eu:{fullname:"europium",radius:2,color:{r:97,g:255,b:199}},Gd:{fullname:"gadolinium",radius:2,color:{r:69,g:255,b:199}},Tb:{fullname:"terbium",radius:2,color:{r:48,g:255,b:199}},Dy:{fullname:"dysprosium",radius:2,color:{r:31,g:255,b:199}},Ho:{fullname:"holmium",radius:2,color:{r:0,g:255,b:156}},Er:{fullname:"erbium",radius:2,color:{r:0,g:230,b:117}},Tm:{fullname:"thulium",radius:2,color:{r:0,g:212,b:82}},Yb:{fullname:"ytterbium",radius:2,color:{r:0,g:191,b:56}},Lu:{fullname:"lutetium",radius:2,color:{r:0,g:171,b:36}},Hf:{fullname:"hafnium",radius:2,color:{r:77,g:194,b:255}},Ta:{fullname:"tantalum",radius:2,color:{r:77,g:166,b:255}},W:{fullname:"tungsten",radius:2,color:{r:33,g:148,b:214}}};function A(e,n,r){for(var t=0;t<r.capacity;t++){var i=e[n+t].split(/\s+/).filter(Boolean),a=i[0],l=O[a],o={r:255,g:102,b:102},s=1;l&&(s=l.radius,o=l.color);var u=parseFloat(i[1]),c=parseFloat(i[2]),m=parseFloat(i[3]);r.addParticle(u,c,m,s,o.r,o.g,o.b)}}var N=function(e){for(var n,r=[],t=e.split("\n"),i=t.length,a=0,l=!1,o=!0;a<i;)if(""!==t[a]){if(l)l=!1;else if(o){var s=parseInt(t[a],10);if(isNaN(s))return console.log("Warning, got NaN as numParticles"),r;n=new S(s),o=!1,l=!0}else n&&(A(t,a,n),r.push(n),a+=n.numParticles-1,o=!0);a++}else a++;return r},R=(r(25),1e5),L=new S(R);L.addParticle(-.5,0,0,.5),L.addParticle(.5,0,0,.5);var D=new S(R);D.addParticle(-.5,.5,0,.5),D.addParticle(.5,-.5,0,.5);for(var k=0;k<R;k++){var z=500*(Math.random()-.5),T=500*(Math.random()-.5),I=500*(Math.random()-.5),F=.5+Math.random();L.addParticle(z,T,I,F),z=500*(Math.random()-.5),T=500*(Math.random()-.5),I=500*(Math.random()-.5),F=.5+Math.random(),D.addParticle(z,T,I,F)}var B=function(){var e=Object(i.useState)([]),n=Object(m.a)(e,2),r=n[0],t=n[1],l=Object(i.useState)(0),o=Object(m.a)(l,2),s=o[0],d=o[1];if(Object(i.useEffect)((function(){(function(){var e=Object(c.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Will download data"),e.next=3,fetch("https://raw.githubusercontent.com/andeplane/simulations/main/lj.xiz");case 3:return n=e.sent,e.t0=N,e.next=7,n.text();case 7:e.t1=e.sent,r=(0,e.t0)(e.t1),t(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),setTimeout((function(){if(0!==r.length){var e=s+1;e>=r.length&&(e=0),d(e)}}),50),0===r.length)return a.a.createElement(a.a.Fragment,null,"Downloading simulation data ...");var f=r[s];return a.a.createElement(E,{particles:f})};o.a.render(a.a.createElement(B,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bac00bbb.chunk.js.map