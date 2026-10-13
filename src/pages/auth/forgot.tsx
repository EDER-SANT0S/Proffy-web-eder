import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { BackgroundIntro } from "../../components/backgroundintro";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import goBack from "../../assets/goback.svg";

const forgotFormSchema = z.object({
  email: z.email("Digite um e-mail válido"),
});

type ForgotForm = z.infer<typeof forgotFormSchema>;

export function Forgot() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotFormSchema),
    mode: "onChange",
  });

  async function handleForgotPassword(data: ForgotForm) {
    setIsSending(true);
    try {
      // TODO: substituir por chamada ao endpoint de recuperação quando a API existir.
      console.info("Solicitação de recuperação de senha:", data.email);
      toast.info("Fluxo demonstrativo: o envio real depende da integração com a API.");
      navigate("/forgot/send-email");
    } catch {
      toast.error("Não foi possível solicitar a redefinição. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="grid min-h-screen grid-cols-5 antialiased">
      <div className="bg-background col-span-2 flex min-h-screen flex-col items-center justify-center px-6">
        <div className="relative w-full max-w-[352px]">
          <button
            type="button"
            aria-label="Voltar à página anterior"
            className="absolute left-0 top-[-100px] cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img src={goBack} alt="" className="h-8 w-12" />
          </button>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h1 className="font-poppins-semibold text-3xl text-text-title">
                Eita, esqueceu<br /> sua senha?
              </h1>
              <p className="mt-5 font-poppins-regular text-base text-text-base">
                Não esquenta, vamos dar um jeito nisso.
              </p>
            </div>
            <form onSubmit={handleSubmit(handleForgotPassword)} noValidate>
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                rounded="all"
                register={register}
                error={errors.email}
              />
              {errors.email && (
                <p role="alert" className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
              <Button
                type="submit"
                disabled={!isValid || isSending}
                title={isSending ? "Enviando..." : "Enviar"}
              />
            </form>
          </div>
        </div>
      </div>
      <BackgroundIntro />
    </div>
  );
}
