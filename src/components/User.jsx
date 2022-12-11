import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function User({
  name,
  stars,
  commits,
  prs,
  issues,
  contribs,
  langs,
  isLoading,
}) {
  if (isLoading)
    return (
      <div className="col-12 col-sm-6 col-lg-6  ">
        <div className=" rounded-2 p-4 bg-white">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  return (
    <div className="col-12 col-sm-6 col-lg-6 ">
      <div className=" rounded-2 p-4 bg-white user">
        <div className="row flex-wrap">
          <div className="col-4">
            <img
              src="https://i.pinimg.com/originals"
              className="rounded-circle"
              width="60px"
              height="60px"
              alt=""
            />
          </div>
          <div className="col-8">
            <p className="p-0 m-0 m-0 fw-bold fs-5">
              <a target="blank" href={`https://github.com/${name}`}>
                {name}
              </a>
            </p>
            <p className="p-0 m-0">Звёзд: {stars}</p>
            <p className="p-0 m-0">Коммитов: {commits}</p>
            <p className="p-0 m-0">PullRequests: {prs}</p>
            <p className="p-0 m-0">Issues: {issues}</p>
            <p className="p-0 m-0">Contributions: {contribs}</p>
            <p className="p-0 m-0">
              ЯП:
              {langs.map((item) => {
                return (
                  <span className="badge text-black me-1 border rounded-5">
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
