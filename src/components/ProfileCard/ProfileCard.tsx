import { Link } from "react-router-dom";
import { UserProps } from "../../interfaces/userProps";

export default function ProfileCard({ avatar, name, url, login }: UserProps) {
  return (
    <div className="p-4 rounded-lg bg-gray-900 text-gray-200 flex flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img className="w-full h-full" src={avatar} alt="" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl">{name}</h3>
        <a
          className="hover:text-gray-400 p-0 transition-all hover:underline"
          href={url}
          target="_blank"
        >
          {url}
        </a>
        <span className="hover:text-gray-400 p-0 transition-all hover:underline mt-2 self-end">
          <Link to={`profile/${login}`}>Ver mais</Link>
        </span>
      </div>
    </div>
  );
}
