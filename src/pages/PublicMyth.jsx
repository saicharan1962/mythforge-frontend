//PublicMyth.jsx//

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const PublicMyth = () => {
  const { id } = useParams();
  const [myth, setMyth] = useState(null);

  useEffect(() => {
    api.get(`/myths/${id}`).then(res => setMyth(res.data));
  }, [id]);

  if (!myth) return <div>Loading...</div>;

  return (
    <div className="public-myth">
      <h1>{myth.title}</h1>
      <p><strong>God:</strong> {myth.god}</p>
      <p>{myth.narrative}</p>
      <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
        Share Your Legend
      </button>
    </div>
  );
};

export default PublicMyth;