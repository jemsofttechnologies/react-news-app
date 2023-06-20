import SignIn from "./components/SignIn"
import newspaper from "../../media/images/newspaper.jpg"

export default function SignInPage() {
  return (
    <div className="flex h-full">
      <div className="hidden lg:inline-flex flex-1 ">
        <img src={newspaper} alt="Newspaper image" className="h-full w-full" />
      </div>
      <div className="h-full flex-1 flex items-center">
        <SignIn />
      </div>
    </div>
  )
}
