window.onload = function() {
  gsap.to("#nube", { x: 600, duration: 8, repeat: -1, yoyo: true, ease: "power1.inOut" });
  gsap.to("#sol", { rotation: 360, transformOrigin: "50% 50%", duration: 10, repeat: -1, ease: "linear" });

  const bici = document.getElementById("bici");

  const tl = gsap.timeline({ repeat: -1 });
  tl.to(bici, { x: -200, duration: 2, ease: "power1.inOut" }) 
    .to(bici, { x: 200, duration: 4, ease: "power1.inOut" })  
    .to(bici, { x: -200, duration: 4, ease: "power1.inOut" }); 
};

const biciSonido = new Howl({
  src: ["Reto/anim/Sonido/sonidobici.mp3"], 
  volume: 0.5
});

document.getElementById("bici").addEventListener("click", function() {
  biciSonido.play();
}); 

