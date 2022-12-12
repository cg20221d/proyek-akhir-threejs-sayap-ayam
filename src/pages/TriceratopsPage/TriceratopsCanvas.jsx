import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import TriceratopsModel from "./TriceratopsModel";
import "./Triceratops.css";

const TriceratopsCanvas = () => {
  return (
    <div className="triceratopsPage m-0 p-0">
      <Canvas id="triceratopsCanvas" shadows>
        <Suspense fallback={null}>
          <TriceratopsModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="detail-info">
        <h1 className="mb-3 detail-info__title">Detail Information</h1>
        <p className="detail-info__text">
          Triceratops (/traɪˈsɛrətɒps/ try-SERR-ə-tops;[1] lit. 'three-horned
          face') is a genus of herbivorous chasmosaurine ceratopsid dinosaur
          that first appeared during the late Maastrichtian stage of the Late
          Cretaceous period, about 68 million years ago in what is now North
          America. It is one of the last-known non-avian dinosaur genera, and
          became extinct in the Cretaceous–Paleogene extinction event 66 million
          years ago. The name Triceratops, which literally means 'three-horned
          face', is derived from the Greek words trí- (τρί-) meaning 'three',
          kéras (κέρας) meaning 'horn', and ṓps (ὤψ) meaning 'face'.
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
                    <td>Dinosauria</td>
                  </tr>
                  <tr>
                    <th scope="row">Order</th>
                    <td>Ornithischia</td>
                  </tr>
                  <tr>
                    <th scope="row">Suborder</th>
                    <td>Ceratopsia</td>
                  </tr>
                  <tr>
                    <th scope="row">Family</th>
                    <td>Ceratopsidae</td>
                  </tr>
                  <tr>
                    <th scope="row">Subfamily</th>
                    <td>Chasmosaurinae</td>
                  </tr>
                  <tr>
                    <th scope="row">Tribe</th>
                    <td>Triceratopsini</td>
                  </tr>
                  <tr>
                    <th scope="row">Genus</th>
                    <td>Triceratops</td>
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

export default TriceratopsCanvas;
