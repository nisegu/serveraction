// /src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs"

export default function Page() {  // functionによっていPageを定義
  return (
    <div className = "flex flex-col items-center">  {/*flex:{display:flex}, flex-col:{flex-direction:column},  items-center:{align-items:center} */}
      <SignIn redirectUrl={"/"} />    {/* ログイン成功後，"/"のページにリダイレクトされる リダイレクトは特定のURLにアクセスしたとき，別のURLによって置き換えられる意味を指す*/}
    </div>
  );
}