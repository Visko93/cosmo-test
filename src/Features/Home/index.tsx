import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { HideableInput } from "../../components/common/HideableInput";
import { UserProfile } from "../../components/common/UserProfile";
import { Layout } from "../../components/layout";
import { useUserContext } from "../../context/UserContext";
import { Search } from "../Search";

export function Home() {
  const navigate = useNavigate();
  const { handlers, state } = useUserContext();
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const handleSearch = (userLogin: string) => {
    return handlers?.fetchUser(userLogin).then((user) => {
      navigate(`/user/${user}`);
      setCollapsed(true);
    });
  };
  const handleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Layout>
      <>
        <HideableInput
          onSearch={handleSearch}
          collapsed={collapsed}
          handleCollapse={handleCollapse}
        />
        {/* User details Container */}
        {!!state.user ? null : <UserProfile data={null} />}
        <Outlet />
        {!!state.repos ? null : <Search noRepos />}
      </>
    </Layout>
  );
}
