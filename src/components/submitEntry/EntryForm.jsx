import { useMutation } from "@tanstack/react-query";

export default function EntryForm({ register, handleSubmit, reset}) {

  const submitEntry = useMutation({
    mutationFn: async (data) => {
      return await new Promise((res) => setTimeout(() => res(data), 1000));
    },
  });

  const onSubmit = (data) => {
    submitEntry.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-base-200 p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Submit Your Entry</h2>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Entry Title</legend>
        <input
          type="text"
          {...register("title", { required: true })}
          className="input w-full"
          placeholder="What is the entry title?"
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Describe your entry</legend>
        <textarea
          {...register("description")}
          className="textarea textarea-bordered h-28 w-full"
          placeholder="Describe your entry, include important details"
        ></textarea>
        <p className="label">Max. Characters 0/1000</p>
      </fieldset>

      {/* LICENSED CONTENT SECTION */}
      <div className="mt-6 space-y-2">
        <h3 className="font-semibold">Licensed Content</h3>
        <p className="text-sm">
          Declare any stock content used to avoid penalty.
        </p>

        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="own"
              defaultChecked
              {...register("licensedContent", { required: true })}
              className="radio radio-primary"
            />
            <span className="text-sm">This entry is entirely my own.</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="not_own"
              {...register("licensedContent", { required: true })}
              className="radio radio-primary"
            />
            <span className="text-sm">
              This entry contains elements I did not create.
            </span>
          </label>
        </div>
      </div>

      {/* SELL PRICE SECTION */}
      <div className="mt-6 space-y-2">
        <h3 className="font-semibold">Entry Sell Price</h3>
        <p className="text-sm">
          Enter the price you want to sell this entry for. If you don't win, the
          contest holder may still buy your entry.
        </p>

        <div className="join">
          <div>
            <div className="">
              <input
                className="input join-item w-22"
                placeholder="$$$"
                {...register("sellPrice", { required: false, min: 0 })}
              />
            </div>
          </div>
          <select className="select join-item w-fit">
            <option selected>USD</option>
            <option>AUD</option>
            <option>Euro</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-primary w-full"
        disabled={submitEntry.isPending}
      >
        {submitEntry.isPending ? "Submitting..." : "Submit Entry"}
      </button>
    </form>
  );
}
