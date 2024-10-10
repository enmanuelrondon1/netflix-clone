"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { UserNetflix } from "@prisma/client";

export const Profiles = (props: ProfilesProps) => {
  const { users } = props;
  const {changeCurrentUser} = useCurrentNetflixUser()

  const [manageProfiles, setManageProfiles] = useState(false);
  const router = useRouter()

  const onClickUser = (user: UserNetflix) => {
    changeCurrentUser(user)
    router.push("/")
  }

  const deleteUser = async (userIdNetflix: string) => {
    try {
      axios.delete("/api/userNetflix", { data: { userIdNetflix } });
      setManageProfiles(false)
      toast({
        title: "Perfil eliminado correctamente",
      });
      router.refresh()
    } catch (error) {
      console.log(error);
      toast({ title: "Ops! Ha ocurrido un error", variant: "destructive" });
    }
  };

  return (
    <div className=" ">
      <div className="flex gap-7">
        {users.map((user) => (
          <div key={user.id} className="text-center relative cursor-pointer "
          onClick={() => onClickUser(user)}
          >
            <Image
              src={user.avatarUrl}
              alt={`Profile image ${user.profileName}`}
              width={140}
              height={140}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "border-transparent hover:border-2 hover:border-white rounded-md"
              )}
            />
            <p className="mt-2 text-gray-500 uppercase text-lg ">
              {user.profileName}
            </p>

            <div
              className={cn(
                "top-14 cursor-pointer w-full flex gap-4 items-center justify-center z-20",
                manageProfiles ? "absolute" : "hidden"
              )}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="bg-white rounded-full hover:bg-red-100 p-1 ">
                    <Trash className="w-6 h-6 text-red-500" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      ¿Seguro que quieres eliminar este perfil?
                    </AlertDialogTitle>
                    <AlertDialogDescription />
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>Volver</AlertDialogCancel>
                    <AlertDialogAction
                      className="text-red-500 border-red-500 border "
                      onClick={() => deleteUser(user.id)}
                    >
                      Eliminar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center ">
        <Button
          variant="outline"
          size="lg"
          className="text-gray-500 border-gray-500 "
          onClick={() => setManageProfiles(!manageProfiles)}
        >
          Administar perfiles
        </Button>
      </div>
    </div>
  );
};
