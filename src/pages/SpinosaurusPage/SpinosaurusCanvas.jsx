import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import SpinosaurusModel from "./SpinosaurusModel";
import "./Spinnosaurus.css";
import { Link } from "react-router-dom";

const SpinosaurusCanvas = () => {
  return (
    <div className="spinnosaurusPage m-0 p-0">
      <Canvas id="spinnosaurusCanvas" shadows>
        <Suspense fallback={null}>
          <SpinosaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="detail-info">
        <h1 className="mb-3 detail-info__title">Detail Information</h1>
        <p className="detail-info__text">
          Spinosaurus (/ˌspɪnəˈsɔːrəs/; lit. 'spine lizard') is a genus of
          spinosaurid dinosaur that lived in what now is North Africa during the
          Cenomanian to upper Turonian stages of the Late Cretaceous period,
          about 99 to 93.5 million years ago.[2][3] The genus was known first
          from Egyptian remains discovered in 1912 and described by German
          palaeontologist Ernst Stromer in 1915.
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
                      <td>Spinosauridae</td>
                    </tr>
                    <tr>
                      <th scope="row">Tribe</th>
                      <td>Spinosaurini</td>
                    </tr>
                    <tr>
                      <th scope="row">Genus</th>
                      <td>Spinosaurus</td>
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

export default SpinosaurusCanvas;
