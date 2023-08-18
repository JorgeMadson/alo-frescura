import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-700">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">Alô Frescura</h1>
          <p className="text-stone-400 mt-5">
            Descubra o novo conceito de praticidade e frescor com Alô Frescura!
            Transforme suas refeições em momentos gourmet sem sair de casa.
            Nosso serviço de entrega de ingredientes selecionados e receitas
            irresistíveis trazem o chef dentro de você à vida. Delicie-se com
            pratos deliciosos, preparados com ingredientes frescos e de
            qualidade, entregues à sua porta. Cozinhar nunca foi tão fácil e
            saboroso. Experimente Alô Frescura hoje e transforme suas refeições
            em verdadeiras experiências gastronômicas!
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
