import Agent from "@/components/Agent";
import React from "react";

const page = () => {
  return (
    <div>
      <h3 className="mb-4">Interview generation</h3>

      <Agent
        userName={"user?.name!"}
        userId={"user?.id"}
        profileImage={"user?.profileURL"}
        type="generate"
      />
    </div>
  );
};

export default page;
