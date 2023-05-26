import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRead } from "../feature/ReadSlice";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import { AiFillDelete } from "react-icons/ai";
import { MutatingDots } from "react-loader-spinner";

const Alldata = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userRead());
  }, []);

  const { users, loading } = useSelector((state) => state.read);

  const createNewUser = () => {
    navigate("/users/CreateUser");
  };

  return (
    <>
      <div className="container p-2 bg-white">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Budget</th>
              <th scope="col">Responses</th>
              <th scope="col">Start Date</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Active</th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <MutatingDots
                height="100"
                width="100"
                left="50"
                color="var(--primary-color)"
                secondaryColor="var(--secondary-color)"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                visible={true}
              />
            ) : users >= 0 ? (
              <div className="text-center">
                <h6 className="text-dark" onClick={createNewUser}>
                  Emty survey's please create a new survey <BsArrowRight />
                </h6>
              </div>
            ) : (
              Object.entries(users).map(([key, user]) => (
                <tr key={key}>
                  <th>{user.values.title}</th>
                  <th>{user.values.amount}</th>
                  <th>1/5</th>
                  <th>{user.values.date}</th>
                  <th>Active</th>
                  {/* <th
                    onClick={() => {
                      dispatch(DeleteUser({ key }));
                    }}
                  >
                    <AiFillDelete size={20} />
                  </th> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Alldata;
