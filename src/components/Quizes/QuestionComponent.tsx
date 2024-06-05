import React from "react";
import type { IQuizQuestion } from "./quiz.interface";
import { QuestionOption } from "./QuestionOption";
import { RadioGroup } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

export const QuestionComponent: React.FC<
  IQuizQuestion & { index: number; control: any }
> = ({ id, question, options, index, control }) => {
  return (
    <Card key={id} className="my-4 bg-white ">
      <CardHeader className="text-zinc-600">
        <h2 className="flex items-center gap-4">
          <span className="border-solid border rounded-full border-emerald-500 w-10 h-10 flex items-center justify-center text-sm">
            {index}
          </span>
          <span className="text-base font-medium">{question}</span>
        </h2>
      </CardHeader>
      <CardContent>
			<FormField
          control={control}
          name={id}
          render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              {options?.map((option) => (
                <QuestionOption key={option.id} {...option} />
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>)
					} />
      </CardContent>
    </Card>
  );
};
