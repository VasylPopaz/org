import { Hero } from "@/components";

import scaleImg from "public/scale.webp";

const ScalePage = () => {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
};

export default ScalePage;
