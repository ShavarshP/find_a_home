import React from "react";
import "./next.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FiltPage = (props) => {
  const { id } = useParams();
  console.log(id);
  const pages = props.data.map((t, i) => {
    if (t === id) {
      return (
        <li key={i} className="selected">
          {t}
        </li>
      );
    }
    return (
      <li key={i}>
        <a href={t} title="Pagina 2">
          {t}
        </a>
      </li>
    );
  });

  // <li className="selected">1</li>
  return (
    <div>
      <div className="wrapper">
        <section className="archive-pages">
          <ul>
            <li className="first-page">
              <a href="#" title="first page">
                first page
              </a>
            </li>
            <li className="previous">
              <a href="#" title="previous page">
                previous page
              </a>
            </li>
            {pages}
            <li className="next">
              <a href="#" title="next page">
                next page
              </a>
            </li>
            <li className="last">
              <a href="#" title="last page">
                last page
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FiltPage;
