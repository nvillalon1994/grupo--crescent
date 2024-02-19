"use client";
import Link from "next/link";

import { MotionTransition } from "../MotionTransition";

export function UsMain() {
  return (
    <div className="relative " id="nosotros">
      <div className="max-w-[100%] bg-white md:py-16 py-16 -z-50 ">
        <MotionTransition className="flex flex-col items-center justify-center">
              <h1 className=" text-2xl md:text-3xl  text-black py-5 pb-8 ">Nosotros</h1>
          <div className="lg:grid max-w-5xl  lg:px-0 mx-auto md:grid-cols-2 grid-col-1 ">
            <div className="px-8 md:px-10 ">
              <p className="text-sm text-black  text-justify py-3 ">
                Grupo Crescent es una organización internacional de servicios
                profesionales fundada sobre la premisa de que el éxito en los
                negocios es, no solo una suma de factores, sino la perfecta
                combinación de éstos. 
                
              </p>
              <p className="text-sm text-black  text-justify py-3">
                Desde el instante mismo de nuestra fundación aplicamos tanto
                dentro de nuestro equipo como con los equipos formados en
                conjunto con nuestros clientes y nuestros colaboradores externos
                – o aquellos con quienes colaboramos – verdaderas comunidades de
                beneficio mutuo: Enseñamos y aprendemos; oímos y comunicamos;
                asistimos en la mejora, en tanto también mejoramos.
              </p>
              <p className="text-base text-[#6EB7CD]  text-justify py-3">
                Grupo Crescent crece y se desarrolla gracias a su gente, a sus
                clientes, a sus colaboradores y, directa o indirectamente, a
                todos los actores de la economía real que comparten nuestros
                valores y convicciones, logrando aceptar desafíos, tratarlos
                como oportunidades y hacer realidad el desarrollo sustentable de
                los negocios.
              </p>
              <Link
                href="#solution"
                className="my-5 sm:px-3 px-16 py-10 z-0 align-middle "
                rel=""
              >
                <div className="flex items-center justify-center sm:text-xl md:p-0 p-4 text-center  text-[#1867AA] h-12  my-10 icontent-center rounded-full  border border- border-[#1867AA] ">
                  CONOCE LA SOLUCIÓN GRUPO CRESCENT
                </div>
              </Link>
            </div>
            <div className="mx-5  p-4 hidden lg:flex">
              <img src="/assets/us.jpg" alt="" />
            </div>
          </div>
        </MotionTransition>
      </div>
    </div>
  );
}
