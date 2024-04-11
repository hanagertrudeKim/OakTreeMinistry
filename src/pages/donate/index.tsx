import React from "react";

export default function Donation() {
  return (
    <div className="flex flex-col items-center py-4">
      <iframe
        className="min-w-[310px] max-w-[500px] h-[650px]"
        src="https://donorbox.org/embed/oaktree-ministry-1?default_interval=m"
        name="donorbox"
      ></iframe>
    </div>
  );
}
