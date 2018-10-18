import React from "react";

const styles = {
  card: {
    width: "200px",
    height: "200px"
  },
};

const FriendCard = props => (
  <div className="col-sm-6 col-md-4 col-lg-3" key={props.id}>
    <div className="card ml-auto mr-auto" style={styles.card}>
      <img className="card-img-top" src={props.image} alt={props.name} onClick={() => props.handleClick(props.name)}/>
    </div>
  </div>
);

export default FriendCard;
