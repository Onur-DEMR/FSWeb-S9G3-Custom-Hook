import React, { useState } from "react";

export default function geceModuAc(initialMode) {
  const [geceModu, setGeceModu] = useState(initialMode);
  return { geceModu, setGeceModu };
}
