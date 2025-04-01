import React from "react";

interface StatusMessageProps {
  earned: number;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ earned }) => {
  return (
    <div>
      {earned > 1000 ? (
        <h2 className="rich">You are rich! (Earned: ${earned.toFixed(2)})</h2>
      ) : earned > 0 ? (
        <h2 className="income">You have gained some income (Earned: ${earned.toFixed(2)})</h2>
      ) : (
        <h2 className="income">No earnings yet.</h2>
      )}
    </div>
  );
};

export default StatusMessage;
