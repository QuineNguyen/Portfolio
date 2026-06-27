import React from "react";

interface PreProps {
  load: boolean;
}

function Pre({ load }: PreProps) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
