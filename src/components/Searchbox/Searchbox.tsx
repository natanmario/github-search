import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { UserProps } from "../../interfaces/userProps";
import { useUserStore } from "../../store/user";

interface SearchboxProps {
  setUser: Dispatch<SetStateAction<UserProps | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Searchbox({ setUser, setLoading }: SearchboxProps) {
  const [userName, setUserName] = useState<string>("");

  function handleSearch(userName: string) {
    setLoading(true);

    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          url: data.html_url,
          avatar: data.avatar_url,
          login: data.login,
          followers: data.followers,
          following: data.following,
        });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  //useEffect(() => console.log(user), [user]);

  return (
    <div className="flex flex-col shadow-xl w-fit p-4 gap-2 rounded-lg bg-gray-900 border border-gray-400">
      <h1 className="text-gray-200">Pesquisar usuário</h1>
      <div className="flex">
        <input
          className="w-full border-gray-200 border rounded-l-lg px-2 bg-gray-900 text-gray-200"
          onChange={(ev) => setUserName(ev.target.value)}
          type="text"
        />
        <button
          className="border-gray-200 border p-2 rounded-r-lg border-l-0 text-gray-200 disabled:bg-gray-800 disabled:text-gray-600 hover:bg-gray-900 transition-colors"
          disabled={userName.length <= 0}
          onClick={() => handleSearch(userName)}
        >
          {<BiSearch />}
        </button>
      </div>
    </div>
  );
}
