import React from "react";
import { useQuery, gql } from "@apollo/client";

export const TRACKS = gql`
  query getTours {
    toursForHome {
      status
      results
      data {
        tours {
          name
          duration
        }
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log(data);

  return (
    <div>
      {data?.toursForHome?.data?.tours?.map((track, index) => (
        <div key={index}>
          <p>{track.name}</p>
          <p>{track.duation}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
