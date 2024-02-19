"use client";
import CountUp from "react-countup";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
  return (
    <div>
      <MotionTransition className="flex items-center justify-center">
         
        <div className="justify-between flex flex-wrap">
          {dataCounter.map(({ id, startNumber, endNumber, text }) => (
            <div key={id} className="mx-10 my-5 ">
              <article className="">
                <div className="flex items-center gap-2 md:block">
                  <span className="flex tabular-nums text-slate-900 text-lg md:text-5xl font-extrabold mb-2 ease-out ">
                    <span className="">
                      +
                      <CountUp
                        start={startNumber}
                        end={endNumber}
                        duration={1.5}
                        enableScrollSpy
                      ></CountUp>{" "}
                    </span>
                  </span>
                  <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#6EB7CD] to-[#6EB7CD] mb-2">
                    {text}
                  </span>
                </div>
                {/* <p className="text-sm text-slate-500">
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text.
                </p> */}
              </article>
              {/* <div className="text-[#1867AA] text-3xl font-semibold">
                +
                <CountUp
                  start={startNumber}
                  end={endNumber}
                  duration={1.5}
                  enableScrollSpy
                ></CountUp>{" "}
              </div> */}
              {/* <span className="text-[#6EB7CD] font-semibold">{text}</span> */}
            </div>
          ))}
        </div>
      </MotionTransition>

      <MotionTransition className="flex items-center justify-center ">
        <div className=" justify-between md:flex">
          <div className="mx-10 my-5 text-[#1867AA] text-2xl font-semibold">
            <span className="text-[#6EB7CD] font-normal">
              SISTEMAS NORMATIVOS CONSTRUIDOS{" "}
            </span>
            <span>EN </span>{" "}
            <CountUp start={0} end={7} duration={1.5} enableScrollSpy></CountUp>{" "}
            <span>PAISES </span>
          </div>
        </div>
      </MotionTransition>
    </div>
  );
}
