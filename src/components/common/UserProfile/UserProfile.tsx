import styles from "./UserProfile.module.css";
import clsx from "clsx";
import type { IUserProfile } from "./IUserProfile.types";
import { IUser } from "../../../global/types/user";

import AccountSearch from "virtual:icons/mdi/account-search-outline";
import FollowersIcon from "virtual:icons/mdi/account-multiple";
import UserIcon from "virtual:icons/mdi/account-outline";
import UserMarkerIcon from "virtual:icons/mdi/map-marker-account";
import { AvatarPlaceholder } from "../../../assets/icons/avatarPlaceholder";
import { ListItem } from "../../ui/atom/ListItem";
import { List } from "../../ui/organisms/List";

// Abstracao pequena nao tem uma vantagem relevante criar um componente unico //para ele
const DetailContainer = (userData: IUser) => {
  return (
    <List title={userData.name} subtitle={userData.login} as="ul">
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
    </List>
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
