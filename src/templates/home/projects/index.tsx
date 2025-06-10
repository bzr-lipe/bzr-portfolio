import { FC, useEffect, useRef } from "react";
import C from "./const";
import * as S from "./styles";
import * as THREE from 'three';
import useAnimation from "./animation";
import MoreProjects from "./more-projects";


const Projects: FC = () => {
  const { selectedProjectsRef, marqueeRef, sectionRef, selectedTestRef, selectedImageTestRef } = useAnimation();
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const imageContainer = document.getElementById("imageContainer") as HTMLDivElement;
    const imageElement = document.getElementById("myImage") as HTMLImageElement;

    if (!imageContainerRef.current || !imageElement) return;
    const imageContainer = imageContainerRef.current;
  
    let easeFactor = 0.02;
    let scene, camera, renderer;
    let planeMesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let mouseStopTimeout;
    let aberrationIntensity = 0.0;
    let lastPosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };
  
    // shaders
    const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
  
    const fragmentShader = /* glsl */`
      varying vec2 vUv;
      uniform sampler2D u_texture;    
      uniform vec2 u_mouse;
      uniform vec2 u_prevMouse;
      uniform float u_aberrationIntensity;
  
      void main() {
          vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
          vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
          
          vec2 mouseDirection = u_mouse - u_prevMouse;
          
          vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
          float pixelDistanceToMouse = length(pixelToMouseDirection);
          float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
   
          vec2 uvOffset = strength * - mouseDirection * 0.1;
          vec2 uv = vUv - uvOffset;
          
          // Limitar UVs para garantir que fiquem dentro do intervalo [0, 1]
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
              discard; // Descartar qualquer fragmento fora dos limites
          }

          vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
          vec4 colorG = texture2D(u_texture, uv);
          vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));
  
          vec4 finalColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);

          // Forçar alpha 0 se UV extrapolou os limites da imagem
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
              finalColor.a = 0.0;
          }

          gl_FragColor = finalColor;
      }
    `;
  
    function initializeScene(texture) {
      //   scene creation
      scene = new THREE.Scene();

      const containerWidth = imageContainer.clientWidth;
      const containerHeight = imageContainer.clientHeight;

      camera = new THREE.OrthographicCamera(
        0, containerWidth,
        containerHeight, 0,
        0.01, 10
      );
      camera.position.z = 1;
      camera.updateProjectionMatrix();
    
      //   uniforms
      let shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture }
      };

      const imageAspect = imageElement.naturalWidth / imageElement.naturalHeight;
      const containerAspect = containerWidth / containerHeight;
      
      // let planeW = 1;
      // let planeH = 1;
      
      // if (imageAspect > containerAspect) {
      //   planeH = 1 / imageAspect;
      // } else {
      //   planeW = imageAspect;
      // }

      let planeW = containerWidth;
      let planeH = containerHeight;

      if (imageAspect > containerAspect) {
        planeH = containerWidth / imageAspect; // Ajusta a altura com base na largura
      } else {
        planeW = containerHeight * imageAspect; // Ajusta a largura com base na altura
      }

      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(planeW, planeH),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
          transparent: true
        })
      );

      // Adicionando uma verificação para forçar o plano a cobrir a tela inteira
      planeMesh.scale.set(containerWidth / planeW, (containerHeight + 0) / planeH, 1);

      planeMesh.position.set(containerWidth / 2, containerHeight / 2, 0);

      scene.add(planeMesh);
    
      renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      imageContainer.appendChild(renderer.domElement);
    }
  
  // use the existing image from html in the canvas
    // const texture = new THREE.TextureLoader().load(imageElement.src, (tex) => {
    //   tex.wrapS = THREE.ClampToEdgeWrapping;
    //   tex.wrapT = THREE.ClampToEdgeWrapping;
    //   tex.needsUpdate = true;
    // });
    // initializeScene(new THREE.TextureLoader().load(imageElement.src));
    
    new THREE.TextureLoader().load(imageElement.src, (tex) => {
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
    
      initializeScene(tex); // ✅ move here so it's only called once the texture is ready
      animateScene();
    });
  
    function animateScene() {
      requestAnimationFrame(animateScene);
    
      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;
    
      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );
    
      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );
    
      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);
    
      planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;
    
      renderer.render(scene, camera);
    }
    // event listeners
    imageContainer.addEventListener("mousemove", handleMouseMove);
    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);
  
    function handleMouseMove(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };
  
      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;
  
      aberrationIntensity = 1;
    }
  
    function handleMouseEnter(event) {
      easeFactor = 0.02;
      let rect = imageContainer.getBoundingClientRect();
  
      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }
  
    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    }
  }, [])

  return (
    <S.Projects id="projects" ref={sectionRef}>
      <S.TopStripe ref={marqueeRef}>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
        <S.StripeText>Projects</S.StripeText>
      </S.TopStripe>
      <S.SelectedProjects ref={selectedProjectsRef}>
        {/* {C.selectedProjects.projects.map((item, index) => (
          <S.SelectedProject key={index} $bgGradient={item.bgGradient}>
            <S.SelectedProjectWrapper $isOdd={index % 2 === 0}>
              <S.SelectedMobileContainer>
                  <S.SelectedMobileImage src={item.mobile.imgSrc} className="image-mobile"/>
                  <S.MobileTitle>{item.title}</S.MobileTitle>
                  <S.SelectedMobileSkills>
                    {item.mobile.skills.map((item, index) => (
                      <S.SelectedMobileSkill key={index}>
                        {item}
                      </S.SelectedMobileSkill>
                    ))}
                  </S.SelectedMobileSkills>
                  <S.SelectedMobileDescription>
                    {item.mobile.description}
                  </S.SelectedMobileDescription>
                </S.SelectedMobileContainer>
              <S.SelectedProjectMainContainer>
                <S.SelectedProjectHeader>
                  <S.SelectedTitle>{item.title}</S.SelectedTitle>
                  <S.SelectedBtn href={item.btnHref} $bgColor={item.btnColors.bgColor} $textColor={item.btnColors.textColor}>{C.selectedProjects.btnText}</S.SelectedBtn>
                </S.SelectedProjectHeader>
                <S.SelectedProjectImage src={item.imgSrc} ref={selectedImageTestRef} className="image-main"/>
              </S.SelectedProjectMainContainer>
            </S.SelectedProjectWrapper>
          </S.SelectedProject>
        ))} */}
        <S.SelectedProject $bgGradient={C.selectedProjects.projects[1].bgGradient}>
            <S.SelectedProjectWrapper $isOdd={true}>
              <S.SelectedMobileContainer>
                  <S.SelectedMobileImage src={C.selectedProjects.projects[1].mobile.imgSrc} className="image-mobile"/>
                  <S.MobileTitle>{C.selectedProjects.projects[1].title}</S.MobileTitle>
                  <S.SelectedMobileSkills>
                    {C.selectedProjects.projects[1].mobile.skills.map((item, index) => (
                      <S.SelectedMobileSkill key={index}>
                        {item}
                      </S.SelectedMobileSkill>
                    ))}
                  </S.SelectedMobileSkills>
                  <S.SelectedMobileDescription>
                    {C.selectedProjects.projects[1].mobile.description}
                  </S.SelectedMobileDescription>
                </S.SelectedMobileContainer>
              <S.SelectedProjectMainContainer>
                <S.SelectedProjectHeader>
                  <S.SelectedTitle>{C.selectedProjects.projects[1].title}</S.SelectedTitle>
                  <S.SelectedBtn href={C.selectedProjects.projects[1].btnHref} $bgColor={C.selectedProjects.projects[1].btnColors.bgColor} $textColor={C.selectedProjects.projects[1].btnColors.textColor}>{C.selectedProjects.btnText}</S.SelectedBtn>
                </S.SelectedProjectHeader>
                <S.MainImageContainer id="imageContainer" ref={imageContainerRef}>
                  <S.SelectedProjectImage src={C.selectedProjects.projects[1].imgSrc} id='myImage' ref={selectedImageTestRef} className="image-main"/>
                </S.MainImageContainer>
              </S.SelectedProjectMainContainer>
            </S.SelectedProjectWrapper>
          </S.SelectedProject>
      </S.SelectedProjects>
      <MoreProjects />
    </S.Projects>
  );
};

export default Projects;
