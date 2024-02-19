"use client";
import { MotionTransition } from "../MotionTransition";
import Link from "next/link";
export function Solution() {
  return (
    <div className="relative " id="nosotros">
      <div className="max-w-[100%] bg-white  -z-50">
        <MotionTransition className="flex flex-col items-center justify-center ">
          <h1 className="text-3xl  text-black py-5 pb-8">Solución Crescent</h1>
          <div className="grid max-w-5xl  mx-auto md:grid-cols-6 ">
            <div className="mx-5 py-4  col-span-2 hidden md:flex">
              <img src="/assets/solucion.png" alt="" />
            </div>
            <div className="px-8 md:px-10  col-span-4">
              <p className="text-sm text-black text-justify py-3">
                Estar a la vanguardia de la creación de soluciones con base
                normativa para aplicar en la mejora de las Organizaciones no
                implica apostar por el recurso humano o por la tecnología,
                porque no creemos en la posibilidad de hacerlo en forma
                desintegrada, ya que el sentido de la tecnología se descubre
                cuando asiste y mejora a las personas, y les permite lograr sus
                objetivos.
              </p>
              <p className="text-sm text-black text-justify py-3">
                Grupo Crescent crece y se desarrolla gracias a su gente, a sus
                clientes, a sus colaboradores y, directa o indirectamente, a
                todos los actores de la economía real que comparten nuestros
                valores y convicciones, logrando aceptar desafíos, tratarlos
                como oportunidades y hacer realidad el desarrollo sustentable de
                los negocios.
              </p>
              <p className="text-sm text-black text-justify py-3">
                Desde entonces nos convertimos en aliados estratégicos de las
                Organizaciones a las que asesoramos, formamos parte activa en su
                crecimiento, tomamos compromiso real con el cumplimiento de sus
                objetivos, planificando proyectos de asesoramiento con plazos
                ciertos y acotados, criterios consensuados de medición de
                resultados, estructura y equipo de trabajo a la medida de sus
                requerimientos. Cada contrato es una demostración de confianza
                que conocemos y respetamos, y es esta actitud la que nos asegura
                la construcción de relaciones con nuestros clientes y sus
                Organizaciones, soportadas por la calidad de los servicios
                desarrollados y las necesidades resueltas.
              </p>
            </div>
          </div>
        </MotionTransition>
      </div>
    </div>
    //   <div className=" max-w-5xl p-6 md:py-40 mx-auto mt-10 md:-mt-40" id="solution">
    //     <MotionTransition className="flex items-center justify-center">

    //      <div>

    //              <h1 className=" text-2xl  text-black py-5">
    //              Solución Crescent

    //              </h1>

    //              <p className="text-sm text-black text-justify py-3">

    //              Estar a la vanguardia de la creación de soluciones con base normativa para aplicar en la mejora de las Organizaciones no implica apostar por el recurso humano o por la tecnología, porque no creemos en la posibilidad de hacerlo en forma desintegrada, ya que el sentido de la tecnología se descubre cuando asiste y mejora a las personas, y les permite lograr sus objetivos.
    //              </p>
    //              <p className="text-sm text-black text-justify py-3">
    //              Grupo Crescent crece y se desarrolla gracias a su gente, a sus clientes, a sus colaboradores y, directa o indirectamente, a todos los actores de la economía real que comparten nuestros valores y convicciones, logrando aceptar desafíos, tratarlos como oportunidades y hacer realidad el desarrollo sustentable de los negocios.

    //              </p>
    //              <p className="text-sm text-black text-justify py-3">
    //              Desde entonces nos convertimos en aliados estratégicos de las Organizaciones a las que asesoramos, formamos parte activa en su crecimiento, tomamos compromiso real con el cumplimiento de sus objetivos, planificando proyectos de asesoramiento con plazos ciertos y acotados, criterios consensuados de medición de resultados, estructura y equipo de trabajo a la medida de sus requerimientos. Cada contrato es una demostración de confianza que conocemos y respetamos, y es esta actitud la que nos asegura la construcción de relaciones con nuestros clientes y sus Organizaciones, soportadas por la calidad de los servicios desarrollados y las necesidades resueltas.

    //              </p>

    //    </div>

    //  </MotionTransition>
    //   </div>
  );
}
