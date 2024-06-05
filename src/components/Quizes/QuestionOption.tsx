import React from "react";
import type { IQuestionOption } from "./quiz.interface";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormControl, FormItem, FormLabel } from "../ui/form";

export const QuestionOption: React.FC<IQuestionOption> = ({
  id,
  label,
  value,
}) => {
  return (
    <FormItem className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
      <FormControl>
        <RadioGroupItem
          className="w-6 h-6 my-1 mr-2"
          value={String(value)}
          id={id}
        />      
				</FormControl>

        <FormLabel htmlFor={id} className="flex items-center font-light pl-2 text-zinc-600 mb-0 mt-0 leading-relaxed">
          {label}
        </FormLabel>

    </FormItem>
  );
};
