import Image from "next/image";

export default function HomeSection() {
    return (
        <div className="h-[85vh] grid grid-cols-[55%_45%]">
            <div className="flex flex-col justify-center content-center flex-wrap space-y-4">
                <h3 className="text-primary text-lg sm:text-xl md:text-2xl">
                    Olá, eu sou
                </h3>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[112px] -indent-1.5">
                    Breno <br/> Antonuci
                </h1>

                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                    Desenvolvedor FullStack
                </h2>
            </div>

            <div className="relative">
                <Image 
                    alt="foto-home"
                    src="/img/foto-home.png"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}
