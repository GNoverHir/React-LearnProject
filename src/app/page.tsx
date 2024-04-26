import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>VAI CURINTIA</CardTitle>
          <CardDescription>Sei la porra</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Sei la porra2</p>
        </CardContent>
        <CardFooter>
          <p>Pé do card kakakakaka ta preto</p>
          <a href="./pages/About"><p>Clica ai dog</p></a>
        </CardFooter>
      </Card>
      <h1 className="font-mono italic">OLÁ MUNDO</h1>
    </main>
  );
}
