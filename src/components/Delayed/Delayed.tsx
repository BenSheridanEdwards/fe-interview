import React, { useState, useEffect, ReactElement } from "react";

interface Props {
  waitBeforeShow: number;
  children: ReactElement;
}

const Delayed = (props: Props) => {
  const { waitBeforeShow, children } = props;
  const [isHidden, setIsHidden] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return <>{isHidden ? "" : children}</>;
};

export default Delayed;
