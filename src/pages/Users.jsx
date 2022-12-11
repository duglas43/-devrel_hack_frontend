import React from "react";
import { FilterBar, User } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUsers } from "../redux/slices/usersSlice";
import { selectFilter, setPage } from "../redux/slices/filterSlice";
import { Pagination } from "@mui/material";
function Users() {
  const dispatch = useDispatch();
  const { sortBy, langs, page } = useSelector(selectFilter);
  const usersData = useSelector(selectUsers).users;
  const status = useSelector(selectUsers).status;
  const handlePageClick = () => {
    dispatch(setPage(page + 1));
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    dispatch(fetchUsers({ sortBy, langs, page }));
  }, [sortBy, langs, page]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid px-2 px-md-4">
        <div className="bg-white py-4 px-2 px-md-3 rounded-3">
          <div className="row px-2 px-lg-4 py-4">
            <div className="col-lg-3 pe-lg-4">
              <FilterBar />
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0 ">
              <div className="body-bg rounded-2 p-4">
                <div className="row gy-4">
                  {status === "loaded"
                    ? usersData.users.map((user) => {
                        return (
                          <User
                            key={user.id}
                            name={user.name}
                            stars={user.stars}
                            commits={user.commits}
                            prs={user.prs}
                            issues={user.issues}
                            contribs={user.contribs}
                            langs={user.langs}
                          />
                        );
                      })
                    : Array(30)
                        .fill(0)
                        .map((_, index) => {
                          return <User isLoading key={index} />;
                        })}
                </div>
                <div className="mt-2 mx-auto d-flex justify-content-center">
                  <Pagination
                    page={page + 1}
                    count={usersData.maxPage + 1}
                    onChange={handlePageClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
