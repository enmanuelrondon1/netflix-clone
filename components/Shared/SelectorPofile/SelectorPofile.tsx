'use client'
import { useRouter } from "next/navigation";
import { SelectorPofileProps } from "./SelectorPofile.types";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserNetflix } from "@prisma/client";
import Image from "next/image";
import { ChevronDown, LogOut, Pencil } from "lucide-react";

export const SelectorPofile = (props: SelectorPofileProps) => {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const onChangeUser = (userNetflix: UserNetflix) => {
    changeCurrentUser(userNetflix)
    router.refresh()
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center ">
          <Image
            src={
              currentUser ? currentUser.avatarUrl : "/profiles/profile-1.png"
            }
            alt="Profile image"
            width={35}
            height={35}
          />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent ">
        {users.map((user) => (
          <DropdownMenuItem
            key={user.id}
            onClick={() => onChangeUser(user)}
            className="flex gap-2 mb-3 group"
          >
            <Image
              src={user.avatarUrl}
              alt="Profile image"
              width={30}
              height={30}
            />
            <p className="group-hover:text-black text-white">
              {user.profileName}
            </p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          className="flex gap-2 mb-3 group text-white cursor-pointer "
          onClick={() => router.push("/profiles")}
        >
          <Pencil className="w-4 h-4" />
          Administar perfiles
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 mb-3 text-white cursor-pointer"
          onClick={() => signOut()}
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
