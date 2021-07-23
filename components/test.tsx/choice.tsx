export default function Choice({
  choice,
  selectChoice,
  index,
  selected,
}: {
  choice: String
  selectChoice: (num: number) => Promise<void>
  index: number
  selected: number
}) {
  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-500 border border-black"
          onClick={() => selectChoice(index + 1)}
          checked={selected === index + 1 ? true : false}
          onChange={() => {}}
        />
        <span className="ml-2"> {choice} </span>
      </label>
    </div>
  )
}
