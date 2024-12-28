import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const AgentSingle = () => {
  const { data } = useContext(DataContext);
  const agentName = useParams();

  const agent = data.find((a) => a.displayName === agentName.id);

  if (!agent) {
    return <h1>No Agent Found with name: {agentName}</h1>;
  }

  return (
    <section className="py-32 md:relative md:min-h-screen md:flex md:flex-wrap md:items-center">
      <div className="md:absolute md:inset-0 md:z-[1]">
        <img src={agent.fullPortraitV2} alt={agent.displayName} className="w-full h-full object-cover object-center md:object-left-top"/>
      </div>
      <div className="container">
        <div className="py-20 md:relative md:z-[2] md:py-32 md:max-w-96">
          <h1 className="text-6xl text-white-100 underline underline-offset-8 decoration-red-50 mb-2">
            {agent.displayName}
          </h1>
          <strong className="text-3xl text-red-50 block mb-10">
            {agent.role.displayName}
          </strong>
          <p className="text-white-50 mb-10">{agent.description}</p>
          <h2 className="text-5xl mb-10 md:mb-20 text-red-50">Abilities</h2>
          <ul className="list-none text-white-100 flex flex-wrap gap-5">
            {agent.abilities.map((ability) => {
              return (
                <li
                  key={ability.displayName}
                  className="text-center w-50%-10px"
                >
                  <div className="w-full max-w-32 mx-auto mb-5">
                    <img
                      src={ability.displayIcon}
                      alt={ability.displayName}
                      className="w-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl text-red-50">
                    {ability.displayName}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgentSingle;
