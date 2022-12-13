import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import TyrannosaurusModel from "./TyrannosaurusModel";
import "./Tyrannosaurus.css";
import { Link } from "react-router-dom";

const TyrannosaurusCanvas = () => {
  return (
    <div className="tyrannosaurusPage m-0 p-0">
      <Canvas id="tyrannosaurusCanvas" shadows>
        <Suspense fallback={null}>
          <TyrannosaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="detail-info">
        <h1 className="mb-3 detail-info__title">Detail Information</h1>
        <p className="detail-info__text">
          Tyrannosaurus[nb 1] is a genus of large theropod dinosaur. The species
          Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex
          or colloquially T-Rex, is one of the best represented theropods.
          Tyrannosaurus lived throughout what is now western North America, on
          what was then an island continent known as Laramidia. Tyrannosaurus
          had a much wider range than other tyrannosaurids.
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
                  <tbody>
                    <tr>
                      <th scope="row">Kingdom</th>
                      <td>Animalia</td>
                    </tr>
                    <tr>
                      <th scope="row">Phylum</th>
                      <td>Chordata</td>
                    </tr>
                    <tr>
                      <th scope="row">Clade</th>
                      <td>Dinosauria, Saurischia, Theropoda</td>
                    </tr>
                    <tr>
                      <th scope="row">Family</th>
                      <td>Tyrannosauridae</td>
                    </tr>
                    <tr>
                      <th scope="row">Subfamily</th>
                      <td>Tyrannosaurinae</td>
                    </tr>
                    <tr>
                      <th scope="row">Genus</th>
                      <td>Tyrannosaurus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Link to="/world" className="btn btn-primary mt-5 d-block">
          Back to World
        </Link>
      </div>
    </div>
  );
};

export default TyrannosaurusCanvas;
