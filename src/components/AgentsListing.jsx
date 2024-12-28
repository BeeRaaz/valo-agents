import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const AgentsListing = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <section className="py-40">
      <div className="container">
        <h1 className="text-6xl text-white-100 underline underline-offset-8 decoration-red-50 mb-20">Agents</h1>
        <div className="md:flex md:flex-wrap md:gap-5 lg:gap-10">
          {data.map((agent) => {
              console.log(agent);
              return (
                <div key={agent.uuid} className="mb-10 last:mb-0 md:mb-0 md:w-50%-10px lg:w-33.33%-20px">
                  <Link to={agent.displayName} className="block group">
                    <div className="agent-card">
                      <div className="agent-card__img relative pt-96 w-full overflow-hidden md:pt-[36rem]">
                        <div className="absolute inset-0 object-cover z-[1]">
                            <img src={agent.background} alt="image description" />
                        </div>
                        <img
                          src={agent.fullPortraitV2}
                          alt={agent.displayName}
                          className="absolute z-[2] inset-0 object-cover object-top md:object-center h-full w-full transition-transform duration-300 group-hover:scale-125"
                        />
                      </div>
                      <div className="agent-card__content text-black-50 bg-white-50 text-center py-4">
                        <h2 className="text-3xl transition-colors group-hover:text-red-50">{agent.displayName}</h2>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AgentsListing;