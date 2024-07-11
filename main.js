
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
              campaignName: "crax",
              serverUrl: "https://staging.lttl.in/event"
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

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
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

  const font = await loadFont();
  

  
    
      const target_imagefce086890f3_iconGeometry = new THREE.PlaneGeometry(1, 0.5628306878306878);
   const target_imagefce086890f3_texture = await loadTexture("assets/crax-marker.png");
  const target_imagefce086890f3_image = new THREE.MeshBasicMaterial({
      map: target_imagefce086890f3_texture,
    });
    const target_imagefce086890f3 = new THREE.Mesh(target_imagefce086890f3_iconGeometry, target_imagefce086890f3_image);
    target_imagefce086890f3.scale.set(1, 1, 1);
    target_imagefce086890f3.position.set(0.01, -0.01, 0.01);
    target_imagefce086890f3.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_8c14c58a719_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_8c14c58a719_Item0Video = await loadVideo("assets/crax video.mp4");

    const video_asset_8c14c58a719_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_8c14c58a719_Item0Video
    );

    let video_asset_8c14c58a719_Item0VideoMaterial

      video_asset_8c14c58a719_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_8c14c58a719_Item0VideoTexture,
        })
    
     const video_asset_8c14c58a719 = new THREE.Mesh(
      video_asset_8c14c58a719_planeGeometry,
      video_asset_8c14c58a719_Item0VideoMaterial
    );

  video_asset_8c14c58a719.position.set(0.014, -0.007, 0);



  if (isIOS) {
    video_asset_8c14c58a719_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_8c14c58a719_Item0Video.loop=true;
  
  video_asset_8c14c58a719.scale.set(1, 1, 1);

    video_asset_8c14c58a719.rotation.set(-0.001, 0, 0);

    
  
const image_8bfe2b3f_d91d91a3_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_8bfe2b3f_d91d91a3_texture = await loadTexture("assets/blinkit-logo.png");
  const image_8bfe2b3f_d91d91a3_image = new THREE.MeshBasicMaterial({
      map: image_8bfe2b3f_d91d91a3_texture,
    });
    const image_8bfe2b3f_d91d91a3 = new THREE.Mesh(image_8bfe2b3f_d91d91a3_iconGeometry, image_8bfe2b3f_d91d91a3_image);
    image_8bfe2b3f_d91d91a3.scale.set(0.3, 0.3, 0.3);
    image_8bfe2b3f_d91d91a3.position.set(0.33, -0.51, 0.04);
    image_8bfe2b3f_d91d91a3.rotation.set(-0.001, 0, 0);
    image_8bfe2b3f_d91d91a3.userData.clickable = true
    
    image_8bfe2b3f_d91d91a3.userData.eventName ="Blinkit"
const image_4e483042_f6ff6fcb_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_4e483042_f6ff6fcb_texture = await loadTexture("assets/crax-logo.jpg");
  const image_4e483042_f6ff6fcb_image = new THREE.MeshBasicMaterial({
      map: image_4e483042_f6ff6fcb_texture,
    });
    const image_4e483042_f6ff6fcb = new THREE.Mesh(image_4e483042_f6ff6fcb_iconGeometry, image_4e483042_f6ff6fcb_image);
    image_4e483042_f6ff6fcb.scale.set(0.3, 0.3, 0.3);
    image_4e483042_f6ff6fcb.position.set(-0.327, -0.511, 0.04);
    image_4e483042_f6ff6fcb.rotation.set(-0.001, 0, 0);
    image_4e483042_f6ff6fcb.userData.clickable = true
    
    image_4e483042_f6ff6fcb.userData.eventName ="Crax website"
      
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
            video_asset_8c14c58a719_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === video_asset_8c14c58a719) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/s/?q=crax"
        },100)
        }
      

      if (o.userData.clickable && o === image_8bfe2b3f_d91d91a3) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/s/?q=crax"
        },100)
        }
      

      if (o.userData.clickable && o === image_4e483042_f6ff6fcb) {
        setTimeout(()=>{
          window.location.href = "https://www.craxcurls.com/"
        },100)
        }
      
      }

    })
    
      
    
anchor.group.add(video_asset_8c14c58a719)
anchor.group.add(image_8bfe2b3f_d91d91a3)
anchor.group.add(image_4e483042_f6ff6fcb)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




     
      video_asset_8c14c58a719_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_8c14c58a719_Item0Video.pause();

        



    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    