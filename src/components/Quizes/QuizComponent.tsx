import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { psychoQuiz } from "./psychoQuiz";
import { QuestionComponent } from "./QuestionComponent";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export const QuizComponent = () => {
  const form = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {psychoQuiz.questions.map(({ question, id, options }, index) => (
          <QuestionComponent
            index={index + 1}
            id={id}
            key={id}
            question={question}
            options={options}
            control={form.control}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
