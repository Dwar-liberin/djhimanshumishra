
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "DJ Himanshu Mishra",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const image_e46ef321_f7386e47_iconGeometry = new THREE.PlaneGeometry(1, 0.55);
   const image_e46ef321_f7386e47_texture = await loadTexture("assets/overlay-image.png");
  const image_e46ef321_f7386e47_image = new THREE.MeshBasicMaterial({
      map: image_e46ef321_f7386e47_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_e46ef321_f7386e47 = new THREE.Mesh(image_e46ef321_f7386e47_iconGeometry, image_e46ef321_f7386e47_image);
    image_e46ef321_f7386e47.scale.set(1.05, 1.05, 1.1);
    image_e46ef321_f7386e47.position.set(0.017, -0.01, 0);
    image_e46ef321_f7386e47.rotation.set(-0.001, 0, 0);
    
    
    
const image_6c8ed7e0_25fd2ceb_iconGeometry = new THREE.PlaneGeometry(1, 0.33);
   const image_6c8ed7e0_25fd2ceb_texture = await loadTexture("assets/gntunes-logo.png");
  const image_6c8ed7e0_25fd2ceb_image = new THREE.MeshBasicMaterial({
      map: image_6c8ed7e0_25fd2ceb_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_6c8ed7e0_25fd2ceb = new THREE.Mesh(image_6c8ed7e0_25fd2ceb_iconGeometry, image_6c8ed7e0_25fd2ceb_image);
    image_6c8ed7e0_25fd2ceb.scale.set(0.6, 0.6, 0.6);
    image_6c8ed7e0_25fd2ceb.position.set(0.06, -0.44, 0);
    image_6c8ed7e0_25fd2ceb.rotation.set(-0.001, 0, 0);
    
    
    
const image_1c97cad3_9d03dd93_iconGeometry = new THREE.PlaneGeometry(1, 1.01);
   const image_1c97cad3_9d03dd93_texture = await loadTexture("assets/himanshu-profile.png");
  const image_1c97cad3_9d03dd93_image = new THREE.MeshBasicMaterial({
      map: image_1c97cad3_9d03dd93_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_1c97cad3_9d03dd93 = new THREE.Mesh(image_1c97cad3_9d03dd93_iconGeometry, image_1c97cad3_9d03dd93_image);
    image_1c97cad3_9d03dd93.scale.set(0.2, 0.2, 0.2);
    image_1c97cad3_9d03dd93.position.set(-0.39, -0.44, 0);
    image_1c97cad3_9d03dd93.rotation.set(-0.001, 0, 0);
    
    
    
const image_5fec6a67_6cbc1ae1_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_5fec6a67_6cbc1ae1_texture = await loadTexture("assets/imdb-logo.png");
  const image_5fec6a67_6cbc1ae1_image = new THREE.MeshBasicMaterial({
      map: image_5fec6a67_6cbc1ae1_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_5fec6a67_6cbc1ae1 = new THREE.Mesh(image_5fec6a67_6cbc1ae1_iconGeometry, image_5fec6a67_6cbc1ae1_image);
    image_5fec6a67_6cbc1ae1.scale.set(0.2, 0.2, 0.2);
    image_5fec6a67_6cbc1ae1.position.set(0.7, 0.03, 0);
    image_5fec6a67_6cbc1ae1.rotation.set(-0.001, 0, 0);
    image_5fec6a67_6cbc1ae1.userData.clickable = true
    
    image_5fec6a67_6cbc1ae1.userData.eventName ="IMDb"
const image_f3e604cf_02f201d1_iconGeometry = new THREE.PlaneGeometry(1, 0.99);
   const image_f3e604cf_02f201d1_texture = await loadTexture("assets/instagram-logo.png");
  const image_f3e604cf_02f201d1_image = new THREE.MeshBasicMaterial({
      map: image_f3e604cf_02f201d1_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_f3e604cf_02f201d1 = new THREE.Mesh(image_f3e604cf_02f201d1_iconGeometry, image_f3e604cf_02f201d1_image);
    image_f3e604cf_02f201d1.scale.set(0.2, 0.2, 0.2);
    image_f3e604cf_02f201d1.position.set(0.7, -0.19, 0);
    image_f3e604cf_02f201d1.rotation.set(-0.001, 0, 0);
    image_f3e604cf_02f201d1.userData.clickable = true
    
    image_f3e604cf_02f201d1.userData.eventName ="Instagram"
const image_d41a53f8_eb08f97a_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_d41a53f8_eb08f97a_texture = await loadTexture("assets/spotify.png");
  const image_d41a53f8_eb08f97a_image = new THREE.MeshBasicMaterial({
      map: image_d41a53f8_eb08f97a_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_d41a53f8_eb08f97a = new THREE.Mesh(image_d41a53f8_eb08f97a_iconGeometry, image_d41a53f8_eb08f97a_image);
    image_d41a53f8_eb08f97a.scale.set(0.2, 0.2, 0.2);
    image_d41a53f8_eb08f97a.position.set(0.7, 0.25, 0);
    image_d41a53f8_eb08f97a.rotation.set(-0.001, 0, 0);
    image_d41a53f8_eb08f97a.userData.clickable = true
    
    image_d41a53f8_eb08f97a.userData.eventName ="Spotify "
const target_imageundefid1435_iconGeometry = new THREE.PlaneGeometry(1, 0.5796178343949044);
   const target_imageundefid1435_texture = await loadTexture("assets/dj-visiting-card.png");
  const target_imageundefid1435_image = new THREE.MeshBasicMaterial({
      map: target_imageundefid1435_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageundefid1435 = new THREE.Mesh(target_imageundefid1435_iconGeometry, target_imageundefid1435_image);
    target_imageundefid1435.scale.set(1, 1, 1);
    target_imageundefid1435.position.set(0.01, -0.01, 0.01);
    target_imageundefid1435.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_a6f14ab7c2d_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_a6f14ab7c2d_Item0Video = await loadVideo("assets/djhm-video.mp4");

    const video_asset_a6f14ab7c2d_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_a6f14ab7c2d_Item0Video
    );

    let video_asset_a6f14ab7c2d_Item0VideoMaterial

      video_asset_a6f14ab7c2d_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_a6f14ab7c2d_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_a6f14ab7c2d = new THREE.Mesh(
      video_asset_a6f14ab7c2d_planeGeometry,
      video_asset_a6f14ab7c2d_Item0VideoMaterial
    );

  video_asset_a6f14ab7c2d.position.set(0.02, 0.618, 0);



  if (isIOS) {
    video_asset_a6f14ab7c2d_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_a6f14ab7c2d_Item0Video.loop=true;
  
  video_asset_a6f14ab7c2d.scale.set(1.05, 1.05, 1);

    video_asset_a6f14ab7c2d.rotation.set(-0.001, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_a6f14ab7c2d_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_5fec6a67_6cbc1ae1) {
        setTimeout(()=>{
          window.location.href = "https://www.imdb.com/name/nm14115341"
        },100)
        }
      

      if (o.userData.clickable && o === image_f3e604cf_02f201d1) {
        setTimeout(()=>{
          window.location.href = "https://www.instagram.com/djhimanshumishra"
        },100)
        }
      

      if (o.userData.clickable && o === image_d41a53f8_eb08f97a) {
        setTimeout(()=>{
          window.location.href = "https://open.spotify.com/artist/1UI8TqDajrGyDZA3SGjaR0"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_e46ef321_f7386e47)
anchor.group.add(image_6c8ed7e0_25fd2ceb)
anchor.group.add(image_1c97cad3_9d03dd93)
anchor.group.add(image_5fec6a67_6cbc1ae1)
anchor.group.add(image_f3e604cf_02f201d1)
anchor.group.add(image_d41a53f8_eb08f97a)

anchor.group.add(video_asset_a6f14ab7c2d)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            








     
      video_asset_a6f14ab7c2d_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_a6f14ab7c2d_Item0Video.pause();

        







    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    