import gitSystem from "./assets/icons/git-system.png";
import "./App.scss";
import Particles from "react-tsparticles";
import Typing from "react-typing-animation";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={gitSystem} className="App-logo" alt="logo" />
          <AnimatedTypingTitle />
        </header>
        <Background />
      </div>
    </>
  );
}

const AnimatedTypingTitle = () => {
  function removeText() {
    return (
      <>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={35} />
      </>
    );
  }
  return (
    <Typing loop={true}>
      <span className="title">Weekends Knowledge Sharing 2022...</span>
      {removeText()}
      <span className="first">#1 GitHub Action, Basic DevOps</span>
      {removeText()}
      <span className="second">#2 Git System</span>
      {removeText()}
    </Typing>
  );
};

const Background = () => {
  return (
    <Particles
      id="tsparticles"
      fullScreen={true}
      fpsLimit={60}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
            animation: {
              enable: false,
              speed: 20,
              sync: true,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: false,
              speed: 3,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
          },
          links: {
            enable: false,
            distance: 100,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            angle: {
              value: 10,
              offset: 0,
            },
            enable: true,
            speed: 5,
            direction: "right",
            random: false,
            straight: true,
            outModes: {
              default: "out",
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          zIndex: {
            value: 1,
            opacityRate: 0.5,
          },
        },
        detectRetina: true,
        background: {
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        emitters: {
          position: {
            y: 55,
            x: -30,
          },
          rate: {
            delay: 4,
            quantity: 1,
          },
          size: {
            width: 0,
            height: 0,
          },
          particles: {
            shape: {
              type: "images",
              options: {
                images: [
                  {
                    src: "https://particles.js.org/images/amongus_blue.png",
                    width: 205,
                    height: 267,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_cyan.png",
                    width: 207,
                    height: 265,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_green.png",
                    width: 204,
                    height: 266,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_lime.png",
                    width: 206,
                    height: 267,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_orange.png",
                    width: 205,
                    height: 265,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_pink.png",
                    width: 205,
                    height: 265,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_red.png",
                    width: 204,
                    height: 267,
                  },
                  {
                    src: "https://particles.js.org/images/amongus_white.png",
                    width: 205,
                    height: 267,
                  },
                ],
              },
            },
            size: {
              value: 40,
            },
            move: {
              speed: 10,
              outModes: {
                default: "destroy",
                left: "none",
              },
              straight: true,
            },
            zIndex: {
              value: 0,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 10,
                sync: true,
              },
            },
          },
        },
      }}
    />
  );
};

export default App;
