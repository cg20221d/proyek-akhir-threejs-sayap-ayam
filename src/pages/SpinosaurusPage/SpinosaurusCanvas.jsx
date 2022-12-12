import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import SpinosaurusModel from "./SpinosaurusModel";
import "./Spinnosaurus.css";

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

export default SpinosaurusCanvas;
