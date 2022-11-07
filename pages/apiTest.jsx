import data from "../api/wikidata_dinosaurs.json";

const apiTest = () => {
  return (
    <div>
      {data.map((item, index) => (
        <ul key={index}>
          <li>dinosaur = {item.dinosaur}</li>
          <li>label = {item.dinosaurLabel}</li>
          <li>taxon = {item.taxon}</li>
          <li>
            <img src={item.image} alt="" />
          </li>
          <li>time1 = {new Date(item.startTime)}</li>
          <li>time2 = {new Date(item.endTime)}</li>
          <li>article = {item.article}</li>
        </ul>
      ))}
    </div>
  );
};

export default apiTest;
