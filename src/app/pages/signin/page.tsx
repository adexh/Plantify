"use client";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/schema/zodValidationSchema";
import Image from "next/image";
import { IconContext } from "react-icons/lib";

function onSubmit(values: z.infer<typeof formSchema>) {
  toast.promise(signIn("credentials", values), {
    loading: "signing...",
    success: <b>User logged in!</b>,
    error: <b>Failed to login user.</b>,
  });
}

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <>
      <div className="bg-black text-white flex items-center h-screen justify-center">
        <div className="border border-gray-800 m-10 p-10 lg:p-28 rounded-lg">
          <h1 className="text-white text-center p-4 sm:text-lg md:text-2xl pb-0 font-bold w-full">
            Create an account
          </h1>
          <p className="text-gray-400 p-3 text-sm text-center">
            Enter your username and password below to create an account
          </p>
          <div className="pt-4 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-gray-900 border-gray-700"
                        />
                      </FormControl>
                      {/* <FormDescription>Enter your user name here</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Password</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="12345678"
                          className="bg-gray-900 border-gray-700"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center  justify-center">
                  <Button
                    type="submit"
                    variant={"secondary"}
                    className="w-full mt-3  font-bold"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex items-center justify-center">
              <div className="w-[23%] border h-0"></div>
              <div className="px-2">or continue with</div>
              <div className="w-[22%] border h-0"></div>
            </div>
            <Button
              className="w-full mt-3 border border-gray-700"
              onClick={() => signIn("google")}
            >
              <IconContext.Provider value={{ size: "25" }}>
                <div className="px-2">
                  <FcGoogle />
                </div>
              </IconContext.Provider>
              Google
            </Button>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
