import React, { useCallback } from "react";
import { useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import MultipleChoiceSlide from "../components/slide/MultipleChoiceSlide";

function PresentPage() {
  const handle = useFullScreenHandle();
  return (
    <div>
      <button onClick={handle.enter}></button>

      <FullScreen handle={handle}>
        <MultipleChoiceSlide></MultipleChoiceSlide>
      </FullScreen>
    </div>
  );
}

export default PresentPage;
