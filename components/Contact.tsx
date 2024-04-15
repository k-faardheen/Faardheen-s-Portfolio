"use client";
import { sendEmail } from "@/lib/sendEmail";
import Form from "./Form";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "./ui/use-toast";

function Contact() {
  const initialeState = {
    message: "",
    code: 0,
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, initialeState);
  const { toast } = useToast();

  useEffect(() => {
    if (formRef.current && state.code === 200) {
      formRef.current.reset();
      toast({
        title: "Got your message! 🚀",
        description: "I'll get back to you soon.",
      });
    }
  }, [state.code, toast]);

  return (
    <div className="h-screen space-y-28 relative snap-center flex flex-col items-center justify-center">
      <h1 className="text-4xl absolute top-10 font-semibold text-center tracking-tighter lg:text-5xl">
        Contact
      </h1>
      <form action={formAction} ref={formRef}>
        <Form />
      </form>
    </div>
  );
}

export default Contact;
