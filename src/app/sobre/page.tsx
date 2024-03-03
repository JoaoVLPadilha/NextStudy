import ClienteFetch from "@/components/ClientFetch/clienteFetch";
import dynamic from "next/dynamic";
import React from "react";
// const Width = dynamic(() => import('@/components/Width/width'), {ssr: false})

const SobrePage = () => {
  return (
    <>
      <div>SobrePage</div>
      <ClienteFetch/>
    </>
  );
};

export default SobrePage;
