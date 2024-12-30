"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { emailSchema, EmailSchema } from "@/lib/validation/related-form";
import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CTAInput = () => {
  const form = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailSchema) => {
    console.log(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="xsCustom:flex-col flex items-center gap-4">
                  <div className="relative w-full text-shadeGrey">
                    <Input
                      {...field}
                      id="input-09"
                      className="peer min-h-[4.167rem] w-full border-[1.33px] border-shadeGrey ps-11 placeholder:tracking-[-0.5px] placeholder:text-shadeGrey"
                      placeholder="Enter your email"
                    />
                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                      <Mail size={26} strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>
                  <Button className="h-[3.375rem] bg-mint">
                    Book a meeting
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default CTAInput;
