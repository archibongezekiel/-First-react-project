import { useState } from "react";
import Prop from "./props";
function Message() {
  const [defaultAlert, mainAlert] = useState(false);
  return (
    <>
      <div>
        {defaultAlert && <Prop close={() => mainAlert(false)} />}
        <button onClick={() => mainAlert(true)}>Button</button>
      </div>
    </>
  );
}
export default Message;
