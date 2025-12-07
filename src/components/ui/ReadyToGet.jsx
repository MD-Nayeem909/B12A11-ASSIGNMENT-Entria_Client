import React from "react";
import Button from "../common/Button";

const ReadyToGet = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-center my-20 px-4">
        <h2 className="scroll-m-20 text-3xl font-bold tracking-tight first:mt-0">
          Ready to get Started?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thouseands of creators on Entria and start showcasing your
          talent today!
        </p>
        <Button>Create Account Now</Button>
      </div>
    </div>
  );
};

export default ReadyToGet;
