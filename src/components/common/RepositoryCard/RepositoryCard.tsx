import * as React from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import StarIcon from "virtual:icons/mdi/star-outline";

import styles from "./RepositoryCard.module.css";
import globalStyles from "../../../global/styles/global.module.css";

import type { IRepositoryCard } from "./IRepositoryCard.types";
import { formatDate } from "../../../utils/formatDate";

function RepositoryCard({
  data: { language, stars, repoName, lastUpdated },
}: {
  data: IRepositoryCard;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const element = cardRef.current;
    gsap.to(cardRef, { duration: 2, x: 200, ease: "bounce" });
  }, []);

  return (
    <div className={clsx([globalStyles.flex, styles.card])} ref={cardRef}>
      <div className={clsx([globalStyles.flex, styles["card-header"]])}>
        <p className={clsx([styles.language])}>{language ?? "Not Found"}</p>
        <div
          className={clsx([globalStyles.flex])}
          style={{ justifyContent: "flex-end" }}
        >
          <StarIcon style={{ fontSize: "2em", color: "white" }} />
          <h5 className={clsx([styles.language])}>{stars ?? "Not found!"}</h5>
        </div>
      </div>
      <div className={clsx([globalStyles.flex, styles["card-footer"]])}>
        <h4>{repoName}</h4>
        <h5>{formatDate(lastUpdated)}</h5>
      </div>
    </div>
  );
}

export { RepositoryCard };
