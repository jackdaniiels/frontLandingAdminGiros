import React from "react";
import { ListGroup } from "../components/ListGroup";
import { useParams } from 'react-router-dom';

export const ListLandings = () => {
  const params = useParams();
  console.log("params =>", params);
  return (
    <>
      <div className="container my-5">
        <h3 className="text-center">Landings</h3>
        <ListGroup />
      </div>
    </>
  );
};

export default ListLandings;
