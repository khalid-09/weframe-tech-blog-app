"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { emailSchema, EmailSchema } from "@/lib/validation/related-form";

interface RelatedPostFormProps {
  placeholder: string;
  buttonText: string;
}

const RelatedPostForm = ({ buttonText, placeholder }: RelatedPostFormProps) => {
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
                <div className="flex rounded-lg shadow-sm shadow-black/5">
                  <Input
                    {...field}
                    className="-me-px h-[2.813rem] flex-1 rounded-e-none bg-[#E4E4E7] p-4 shadow-none placeholder:text-base placeholder:font-medium placeholder:tracking-[-0.48px] placeholder:text-secondary-text focus-visible:z-10"
                    placeholder={placeholder}
                  />
                  <Button
                    type="submit"
                    className="inline-flex h-[2.813rem] items-center rounded-e-lg rounded-s-none border border-input bg-mint px-8 text-base font-bold text-white outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {buttonText}
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

export default RelatedPostForm;
