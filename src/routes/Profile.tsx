import { Link } from "react-router-dom";
import { useUserStore } from "../store/user";

export default function Profile() {
  const user = useUserStore((state) => state.user);
  console.log(user);

  return (
    <div className="flex justify-center p-5">
      <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
        <div className="w-36 rounded-full overflow-hidden mb-2">
          <img src={user.avatar} alt={user.login} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-center text-2xl mb-8">{user.name}</h2>
          <span className="mb-2">Usuário: {user.login}</span>
          <a
            className="hover:text-gray-400 p-0 transition-all hover:underline "
            href={user.url}
            target={"_blank"}
          >
            {user.url}
          </a>
          <div className="flex gap-8">
            <span>{user.followers} seguidores</span>
            <span>{user.following} seguindo</span>
          </div>
        </div>
        <span className="mt-4 hover:text-gray-400 p-0 transition-all hover:underline self-start">
          <Link to="/">Voltar</Link>
        </span>
      </div>
    </div>
  );
}
