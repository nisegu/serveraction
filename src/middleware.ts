import { authMiddleware } from "@clerk/nextjs";   // ユーザー認証を処理する リクエストがエンドポイントに到達する前にユーザー認証チェックする

export default authMiddleware ({
  // publicRoutesで，認証されていない人でも見れるページを指定します
  // 今回の場合はホームページだけログインしなくても見れるようにしています
  publicRoutes: ["/"],  // これは認証不要なルートのリストを示す
});

export const config = {   // configを定義
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],   // 特定パターンに対してマッチを行うプロパティー
};

/* configのmatcherプロパティで配列で3つの正規表現パターンである。
   1:'.'や'_next'を指定することで，拡張子や'_next'を持つURLにはマッチしない
   2:"/"はルート('/')のURLにマッチ
   3:'/api'または'/trpc'で始まるURLにマッチ。URLパスの一部として認識
*/