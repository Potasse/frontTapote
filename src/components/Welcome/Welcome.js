import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Stepper from "./Stepper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import knowimg from "../images/light-bulb.png";
import eventimg from "../images/placard.png";
import finalimg from "../images/ranking.png";

function Welcome(props) {
  let navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [valuestep, setValuestep] = useState(false);

  const stepArray = [
    "A savoir",
    // "Location",
    // "Service Offered",
    "Detail",
    "Fin",
  ];

  function display(step) {
    if (step === 1) {
      return (
        <div className="max-w-xs m-8 p-5 shadow-lg rounded-3xl shadow-gray ">
            
            <h1 className="flex justify-center mt-2 mb-2 text-lg"> <strong>A savoir</strong> </h1>

          <div className="flex justify-center">
            <img src={knowimg} alt="blog" height="100" width="100" />
            <br></br>
          </div>

          

          <div className="flex justify-center text-center">
            Important a savoir est que tapote est une application qui nous
            permet de trouver notre evenement le plus proche et le plus chaud
            afin d'y participer.
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="max-w-xs m-8 p-5 shadow-lg rounded-3xl shadow-gray ">

            <h1 className="flex justify-center mt-2 mb-2 text-lg"> <strong>Detail</strong> </h1>

          <div className="flex justify-center">
            <img src={eventimg} alt="blog" height="100" width="100" />
            <br></br>
          </div>

          <div className="flex justify-center text-center">
            Tapote utilisera la geolocation afin de vous fournir l'emplacement plus de vous.
            Pour cette taches chaque utilisateur devra activer sa position geographique sur la carte
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="max-w-xs m-8 p-5 shadow-lg rounded-3xl shadow-gray ">

            <h1 className="flex justify-center mt-2 mb-2 text-lg"> <strong>Fin</strong> </h1>

          <div className="flex justify-center">
            <img src={finalimg} alt="blog" height="100" width="100" />
            <br></br>
          </div>

          <div className="flex justify-center text-center">
           Pour acceder a la totalité de l'utilisation de l'application chaque utlisateur 
           doit être connecter. Pour cela a l'etape suivant veuillez vous connecté si vous avez déjà 
           un compte ou vous inscrire.
          </div>

        </div>
      );
    }
  }
  const handleClick = (clickType) => {
    let newStep = currentStep;
    //let valuestep = false;

    clickType == "next" ? newStep++ : newStep--;
    // Check if steps are within the boundary
    if (newStep > 0 && newStep <= stepArray.length) {
      setCurrentStep(newStep);
    }

    if (currentStep === 3) {
      setValuestep(true);
      console.log("valeur est " + valuestep);
      navigate("/login");
    } else {
      valuestep = false;
    }
  };

  return (
    <div className="">

        <div className="text-center text-2xl font-semibold text-orange-700 mt-5"><h1>BIENVENU A TAPOTE</h1></div>
        

      <div className="container horizontal mt-5 mb-1">
        <Stepper steps={stepArray} currentStepNumber={currentStep} />
      </div>
                {/* Division pour le contenu a chaque etape */}

                <div>{display(currentStep)}</div>

      <div className="container flex justify-around my-8 ">
        <button
          onClick={() => handleClick("precedent")}
          className={`${
            currentStep === 3 ? "hidden" : "visible"
          }  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-700 hover:bg-orange-900 text-white font-normal py-2 px-4 mr-1 rounded `}
        >
          {" "}
          Precedent{" "}
        </button>

        <button
          onClick={() => handleClick("next")}
          className={`${
            currentStep === 3 ? "visible" : "hidden"
          }  transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded `}
        >
          {" "}
          Passer{" "}
        </button>

        <button
          onClick={() => handleClick("next")}
          className={`${
            currentStep === 3 ? "hidden" : "visible"
          } transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white font-normal py-2 px-4 rounded `}
        >
          {" "}
          Suivant{" "}
        </button>
      </div>
    </div>
  );
}

export default Welcome;
