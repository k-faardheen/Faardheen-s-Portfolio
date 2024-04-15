"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Form() {
  return (
    <Card className="w-full max-w-md lg:max-w-lg bg-transparent border-zinc-600 text-white">
      <CardHeader>
        <CardTitle className="text-2xl tracking-tighter">
          Get In Touch
        </CardTitle>
        <CardDescription>
          Are you looking for an enthusiastic developer to join your team?
          <div className="flex items-center space-x-1">
            <span>Let&apos;s talk!</span>
            <Link href="Document/CV.pdf" target="_blank">
              <DocumentMagnifyingGlassIcon className="h-4 w-4" />
            </Link>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          className="p-6 bg-inherit border-zinc-600 focus:border-zinc-300/50"
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          className="p-6 bg-inherit border-zinc-600 focus:border-zinc-300/50"
        />
        <Textarea
          required
          placeholder="Drop a message!"
          name="message"
          className="bg-inherit border-zinc-600 focus:border-zinc-300/50 col-span-2 px-6"
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send</Button>
      </CardFooter>
    </Card>
  );
}

export default Form;
