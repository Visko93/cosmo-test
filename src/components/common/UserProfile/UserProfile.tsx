import * as React from "react";

import styles from "./UserProfile.module.css";
import clsx from "clsx";
import type { IUserProfile } from "./IUserProfile.types";
import { IUser } from "../../../global/types/user";
import globalStyles from "../../../global/styles/global.module.css";

import AccountSearch from "virtual:icons/mdi/account-search-outline";
import FollowersIcon from "virtual:icons/mdi/account-multiple";
import UserIcon from "virtual:icons/mdi/account-outline";
import UserMarkerIcon from "virtual:icons/mdi/map-marker-account";
import { AvatarPlaceholder } from "../../../assets/icons/avatarPlaceholder";

const ListItem = ({
  icon,
  text,
}: {
  icon: React.SVGProps<SVGSVGElement>;
  text: string | number | undefined;
}) => (
  <div className={clsx([globalStyles.flex])}>
    <>
      {!!icon ? icon : null}
      <h5>{text ?? "Not found!"}</h5>
    </>
  </div>
);

const DetailContainer = (userData: IUser) => {
  return (
    <div style={{ zIndex: 2 }}>
      <h1>{userData.name}</h1>
      <small>{userData.login}</small>
      <ListItem
        icon={<UserIcon style={{ fontSize: "1em", color: "white" }} />}
        text={`Name: ${userData?.name}`}
      />
      <ListItem
        icon={<FollowersIcon style={{ fontSize: "1em", color: "white" }} />}
        text={`Followers: ${userData?.followers}`}
      />
      <ListItem
        icon={<AccountSearch style={{ fontSize: "1em", color: "white" }} />}
        text={`Following: ${userData?.following}`}
      />
      <ListItem
        icon={<UserMarkerIcon style={{ fontSize: "1em", color: "white" }} />}
        text={`Location: ${userData?.location}`}
      />
    </div>
  );
};

function UserProfile({ data }: IUserProfile) {
  return (
    <div className={clsx([styles.container])}>
      <div className={styles["details-container"]}>
        {!!data ? <DetailContainer {...data} /> : null}
      </div>
      <div className={styles["avatar-wrapper"]}>
        {!!data ? (
          <img
            className={styles["avatar-image"]}
            src={data?.avatar_url ?? ""}
            alt=""
          />
        ) : (
          <AvatarPlaceholder />
        )}
      </div>
    </div>
  );
}

export { UserProfile };
