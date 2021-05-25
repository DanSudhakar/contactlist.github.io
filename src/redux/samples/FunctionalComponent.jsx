import React, { useState } from "react";

export default function FunctionalComponent(props) {
  const [name, setname] = useState(props.firstName);
  return <div>FC new: {name}</div>;
}
