import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import StegosaurusModel from "./StegosaurusModel";
import "./Stegosaurus.css";

const SpinosaurusCanvas = () => {
  return (
    <div className="stegosaurusPage m-0 p-0">
      <Canvas id="stegosaurusCanvas" shadows>
        <Suspense fallback={null}>
          <StegosaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="detail-info">
        <h1 className="mb-3 detail-info__title">Detail Information</h1>
        <p className="detail-info__text">
          Stegosaurus (/ˌstɛɡəˈsɔːrəs/;[1] lit. 'roof-lizard') is a genus of
          herbivorous, four-legged, armored dinosaur from the Late Jurassic,
          characterized by the distinctive kite-shaped upright plates along
          their backs and spikes on their tails. Fossils of the genus have been
          found in the western United States and in Portugal, where they are
          found in Kimmeridgian- to early Tithonian-aged strata, dating to
          between 155 and 145 million years ago.
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
                    <td>Dinosauria, Thyreophora</td>
                  </tr>
                  <tr>
                    <th scope="row">Order</th>
                    <td>Ornithischia</td>
                  </tr>
                  <tr>
                    <th scope="row">Suborder</th>
                    <td>Stegosauria</td>
                  </tr>
                  <tr>
                    <th scope="row">Family</th>
                    <td>Stegosauridae</td>
                  </tr>
                  <tr>
                    <th scope="row">Subfamily</th>
                    <td>Stegosaurinae</td>
                  </tr>
                  <tr>
                    <th scope="row">Genus</th>
                    <td>Stegosaurus</td>
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
