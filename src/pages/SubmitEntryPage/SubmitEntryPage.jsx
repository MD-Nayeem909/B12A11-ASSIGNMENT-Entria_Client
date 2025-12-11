import React from "react";
import EntryForm from "../../components/submitEntry/EntryForm";
import EntryUploadBox from "../../components/submitEntry/EntryUploadBox";
import { useForm } from "react-hook-form";

export default function SubmitEntryPage() {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="w-full mx-auto p-6 flex gap-6">
      <div className="w-1/2">
        <EntryForm
          handleSubmit={handleSubmit}
          reset={reset}
          register={register}
        />
      </div>
      <div className="w-1/2">
        <EntryUploadBox register={register} />
      </div>
    </div>
  );
}
