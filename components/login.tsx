"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginAction } from "@/app/actions/userFetcher";
import { useAppContext } from "@/provider/app-context";

export default function LoginPage() {
  const { setUser } = useAppContext();

  async function handleLogin(formData: FormData) {
    const userId = await loginAction(formData);

    if (userId) setUser(userId);
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Kanban Board にログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#E76F6F] hover:bg-[#d65f5f] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              ログイン
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
