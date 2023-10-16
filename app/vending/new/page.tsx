"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface VendingForm {
  title: string;
  description: string;
}

const NewVendingPage = () => {
  const router = useRouter();

  const { register, control, handleSubmit } = useForm<VendingForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/vending", data);
            router.push("/vending");
          } catch (error) {
            setError("An unexpected error occured!...");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Vending</Button>
      </form>
    </div>
  );
};

export default NewVendingPage;
