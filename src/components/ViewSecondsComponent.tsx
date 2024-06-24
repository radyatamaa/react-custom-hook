import React from 'react';
import useUniqViewSeconds from '../hooks/useUniqViewSeconds';

const ViewSecondsComponent: React.FC = () => {
  const { uniqueViewSeconds, error } = useUniqViewSeconds();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Unique View Seconds</h1>
      <ul>
        {uniqueViewSeconds.map((second) => (
          <li key={second}>{second}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewSecondsComponent;
