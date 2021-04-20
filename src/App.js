import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const AgentTwo = () => {
  return <AgentBond />;
};
const Agent = () => {
  return <AgentTwo />;
};
// const AgentBond = () => {
//   return (
//     <Context.Consumer>
//       {(context) => (
//         <Fragment>
//           <h3>Agent Information</h3>
//           <p>Mission name: {context.data.mname}</p>
//         </Fragment>
//       )}
//     </Context.Consumer>
//   );
// };
const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h1>Mission name</h1>
          <p>Agent Information: {context.data.mname}</p>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Context API</h1>
        <Provider>
          <Agent />
        </Provider>
      </div>
    </div>
  );
};

export default App;
