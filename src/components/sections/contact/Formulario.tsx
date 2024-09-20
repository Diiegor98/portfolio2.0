//Componentes
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

//Zod validador de form y useForm
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//Emailjs
import emailjs from "@emailjs/browser";

//Validaciones
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Mínimo 3 caracteres" })
    .max(50, { message: "Máximo 50 caracteres" }),
  email: z.string().email({ message: "El email no es válido" }),
  textarea: z
    .string()
    .min(1, { message: "La descripción no puede estar vacía" }),
});

//Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Credenciales de emailjs
const serviceID = "service_jk48s5k";
const templateId = "template_s0nno2w";
const apikey = "a04xra0EMnmJUZF-l";

export function Formulario() {
  //Definición del formulario
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      textarea: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const templateParams = {
        username: values.username,
        email: values.email,
        message: values.textarea,
      };

      const response = await emailjs.send(
        serviceID,
        templateId,
        templateParams,
        apikey
      );

      toast.success("Mensaje enviado.");
      console.log("Correo enviado:", response.status, response.text);
      form.reset();
    } catch (error) {
      toast.error("Error al enviar el mensaje.");
      console.error("Error al enviar el correo:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Diego" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="textarea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje:</FormLabel>
              <FormControl>
                <Textarea placeholder="Escriba un mensaje aquí..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-600">Enviar</Button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </Form>
  );
}
