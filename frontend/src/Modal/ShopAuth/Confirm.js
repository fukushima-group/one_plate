import React from "react";
import { useStateMachine } from "little-state-machine";
import { updateAction } from "../../components/organisms/Modal/ShopAuth/node_modules/components/organisms/Modal/ShopAuth/updateAction";

export const Confirm = (props) => {
  const { state } = useStateMachine(updateAction);

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default Confirm;
