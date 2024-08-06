import { Button } from "./button"
import { Input } from "./input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center m-5 md:m-0">
      <Input type="text" placeholder="Search for user..." className="w-[70%]"/>
      <Button type="submit" className="bg-[#39CDCC] w-[20%] rounded-l-none ml-[-15px]">Search</Button>
    </div>
  )
}
