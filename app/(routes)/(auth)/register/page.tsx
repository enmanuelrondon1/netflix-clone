import Link from "next/link";
import { Terms } from "../components/Terms/Terms";
import { RegisterForm } from "./RegisterForm";


export default function RegisterPage() {
  return (
    <div className="" >
      <p className="text-3xl font-bold text-left mb-7 ">Registro de usuario</p>
      <RegisterForm />
      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70 ">Ya tienes una cuenta?</p>
        <Link href='/login' className="opacity-1 text-white">
        Inicia sesion aqui
        </Link>
      </div>
      <Terms />
    </div>
  )
}
