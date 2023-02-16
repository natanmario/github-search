import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Searchbox from "../components/Searchbox/Searchbox";
import { UserProps } from "../interfaces/userProps";
import { useUserStore } from "../store/user";

export default function Search() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function addUser() {
    if (user) {
      useUserStore.setState((state) => ({ user: user, ...state.addUser }));
    }
  }

  useEffect(() => {
    addUser();
  }, [user]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Searchbox setUser={setUser} setLoading={setIsLoading} />
      {isLoading && <h1>Carregando...</h1>}
      {user && (
        <ProfileCard
          login={user.login}
          avatar={user.avatar}
          name={user.name}
          url={user.url}
        />
      )}
    </div>
  );
}
