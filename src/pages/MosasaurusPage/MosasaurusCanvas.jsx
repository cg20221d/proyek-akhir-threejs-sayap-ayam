import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import MosasaurusModel from "./MosasaurusModel";
import "./Mosasaurus.css";

const MosasaurusCanvas = () => {
  return (
    <div className="mosasaurusPage m-0 p-0">
      <Canvas id="mosasaurusCanvas" shadows>
        <Suspense fallback={null}>
          <MosasaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="mosasaurusInfo">
        <h1 className="mb-3 mosasaurusInfo__title">Detail Information</h1>
        <p className="mosasaurusInfo__text">
          Mosasaurus (/ˌmoʊzəˈsɔːrəs/; "lizard of the Meuse River") is the type
          genus (defining example) of the mosasaurs, an extinct group of aquatic
          squamate reptiles. It lived from about 82 to 66 million years ago
          during the Campanian and Maastrichtian stages of the Late Cretaceous.
        </p>
        <div
          className="accordion accordion-flush d-block w-100"
          id="accordionExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Scientific Classification
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <table className="table table-borderless">
                  <tr>
                    <th scope="row">Kingdom</th>
                    <td>Animalia</td>
                  </tr>
                  <tr>
                    <th scope="row">Phylum</th>
                    <td>Chordata</td>
                  </tr>
                  <tr>
                    <th scope="row">Class</th>
                    <td>Reptilia</td>
                  </tr>
                  <tr>
                    <th scope="row">Order</th>
                    <td>Squamata</td>
                  </tr>
                  <tr>
                    <th scope="row">Superfamily</th>
                    <td>Mosasauroidea</td>
                  </tr>
                  <tr>
                    <th scope="row">Family</th>
                    <td>Mosasauridae</td>
                  </tr>
                  <tr>
                    <th scope="row">Tribe</th>
                    <td>Mosasaurini</td>
                  </tr>
                  <tr>
                    <th scope="row">Genus</th>
                    <td>Mosasaurus</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosasaurusCanvas;
