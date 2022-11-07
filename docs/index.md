---
layout: home
hero:
  name: I-Pleased
  text: Full into the moon.
  image:
    src: /logo.svg
    alt: Logo
  # tagline: Dream wake up or Full into the moon.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: View on GitHub
      link: https://github.com/sukiyue/i-pleased
# features:
#   - icon: ⚡️
#     title: Vite, The DX that can't be beat
#     details: Lorem ipsum...
#   - icon: 🖖
#     title: Power of Vue meets Markdown
#     details: Lorem ipsum...
---

<!-- <Layout /> -->

<script>

</script>

<style lang="scss" scope>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}

.VPHome {
  padding: 96px 0;
  height: 100vh;
  background-image: -webkit-linear-gradient(top,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.3) 20%,
      rgba(0,0,0,0.3) 80%,
      rgba(0,0,0,0.6) 100%
    ),
    -webkit-linear-gradient(left,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.3) 20%,
      rgba(0,0,0,0.3) 80%,
      rgba(0,0,0,0.6) 100%)
      ,url(/assets/images/bg.png);
  /* background-image: url(/assets/images/bg.png);  */
  background-size: cover;
      background-attachment: fixed;

  &::after {
    content: ' ';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    background-image: -webkit-linear-gradient(top,
      rgba(238,17,17, 0.8) 0%,
      rgba(238,17,17, 0.2) 20%,
      rgba(238,17,17, 0) 80%,
      rgba(238,17,17, 0) 100%
    ),
    -webkit-linear-gradient(left, 
      rgba(0,98,255, 0) 0%, 
      rgba(0,98,255, 0) 20%, 
      rgba(0,98,255, 0.2) 80%, 
      rgba(0,98,255, 0.8) 100%)
      ,url(/assets/images/bg.png);
    background-size: cover;
    background-attachment: fixed;
    background-blend-mode: none;
    animation-duration: 5s;
    animation-delay: 0s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-name: glitch-anim-1;
  }

  p {
    color: #fff;
  }
}

@keyframes glitch-anim-1 {
  0% {
    opacity: 1;
    transform: translate3d(10px, 0, 0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  2% {
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }

  4% {
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }

  6% {
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }

  8% {
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }

  10% {
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }

  12% {
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }

  14% {
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }

  16% {
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }

  18% {
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }

  20% {
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }

  21.9% {
    opacity: 1;
    transform: translate3d(10px, 0, 0);
  }

  22%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

}
</style>