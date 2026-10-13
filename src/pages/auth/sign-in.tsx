import { Check } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import heart from "../../assets/heart.svg";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { toast } from "sonner";
import { BackgroundIntro } from "../../components/backgroundintro";
import { Link } from "react-router";

const sigInForm = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
});

type SignInForm = z.infer<typeof sigInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm<SignInForm>({
    resolver: zodResolver(sigInForm),
    mode: "onChange",
  });

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);
      await new Promise((resolver) => setTimeout(resolver, 2000));
      toast.success("Credenciais válidas");
    } catch {
      toast.error("Credenciais inválidas");
    }
    reset();
  }

  return (
    <div className="grid min-h-screen grid-cols-5 antialiased">
      <BackgroundIntro />
      <div className="bg-background col-span-2 flex h-full min-h-screen flex-col items-center justify-center">
        <div className="p-8">
          <div className="flex w-[352px] max-w-full flex-col justify-center gap-6">
            <h1 className="font-poppins-semibold text-3xl text-text-title">Fazer Login</h1>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <Input type="email" id="email" placeholder="E-mail" rounded="top" register={register} error={errors.email} />
              <Input type="password" id="password" placeholder="Senha" rounded="bottom" register={register} error={errors.password} />
              <div className="mb-10 mt-6 flex flex-row justify-between gap-4">
                <label htmlFor="checkbox-remember" className="flex cursor-pointer items-center gap-2">
                  <span className="relative flex items-center justify-center">
                    <input type="checkbox" id="checkbox-remember" className="h-6 w-6 appearance-none rounded-lg bg-white checked:bg-green" />
                    <Check className="absolute h-4 w-4 text-white" />
                  </span>
                  <span className="font-poppins-regular text-base text-text-complement">Lembrar-me</span>
                </label>
                <Link to="/forgot" className="cursor-pointer font-poppins-regular text-base text-text-complement hover:text-purple">
                  Esqueci minha senha
                </Link>
              </div>
              <Button type="submit" disabled={isSubmitting || !isValid} title="Entrar" />
            </form>
          </div>
          <footer className="mt-30 w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="font-poppins-regular text-text-complement">Não tem conta?</p>
                <Link to="/sign-up" className="text-left font-poppins-semibold text-purple underline">Cadastre-se</Link>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p className="font-poppins-regular text-text-complement">É de graça</p>
                <img src={heart} alt="Coração roxo" className="w-4" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
