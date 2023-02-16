import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Searchbox from "../components/Searchbox/Searchbox";
import { UserProps } from "../interfaces/userProps";
import { useUserStore } from "../store/user";
import ReactLoading from "react-loading";

export default function Search() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function addUser() {
    if (user) {
      useUserStore.setState((state) => ({ user: user, state }));
    }
  }

  useEffect(() => {
    addUser();
  }, [user]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Searchbox setUser={setUser} setLoading={setIsLoading} />
      {isLoading ? (
        <div className="p-8 flex justify-center items-center">
          <ReactLoading type="spin" color="#c4c4c4" height={50} width={50} />
        </div>
      ) : (
        user && (
          <ProfileCard
            login={user.login}
            avatar={user.avatar}
            name={user.name}
            url={user.url}
          />
        )
      )}
    </div>
  );
}
