import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="w-4/9 h-screen pt-4 pl-5 bg-teal-950 border-r-1 border-r-neutral-800">
        <Card className="w-96 mt-10 ">
          <CardHeader>
            <CardTitle className="text-white">Realizar Login</CardTitle>
            <CardDescription>Informe suas credenciais</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div>
        <p className="text-white">Apollo</p>
      </div>
    </div>
  );
}
