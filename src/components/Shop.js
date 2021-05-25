import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { buyLaptop, buyMobile, fetchUsers } from "../redux/actions";

const Shop = (props) => {
  console.log();
  const users = useSelector((state) => state.usersReducers.users);
  const numOfLaptops = useSelector((state) => state.laptopReducer.numOfLaptops);
  const numOfMobiles = useSelector((state) => state.mobileReducer.numOfMobiles);
  return (
    <React.Fragment>
      <div>Welcome to Shop</div>
      <div className="item">
        <p>Dell Inspirion Laptop</p>
        <p>Available: {numOfLaptops}</p>
        <button onClick={props.buyLaptop}>Buy Laptop</button>
      </div>
      <div className="item">
        <p>Readmi Note 8 Pro</p>
        <p>Available: {numOfMobiles}</p>
        <button onClick={props.buyMobile}>Buy Mobile</button>
      </div>
      <div className="item">
        <p>Get Users data</p>
        <p>Count: {users.length}</p>
        <button onClick={props.fetchUsers}>Get Users</button>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyLaptop,
      buyMobile,
      fetchUsers,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Shop);
