import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="max-w-[100%]  bg-black p-6 mt-10  md:-mt-40 ">
      {/* <div className="md:flex justify-between">
                
                
                {footerData.map(({ id, title, links }) => (
                    <div key={id}  className="">
                        <h4 className="mt-8 text-sm md:mt-8 text-white">{title}</h4>
                        {links.map(({ id, name, link }) => (
                            <Link key={id} href={link} className="block mt-4 text-slate-400 hover:text-[3589d5e] ">
                              
                                    {name}
                               
                            </Link>
                        ))}
                    </div>
                ))}
            </div> */}

      {/* <div className="border-[#3F3E45] border-[1px] my-7" /> */}

      <div className="items-center justify-between flex flex-col md:flex-row gap-3">
        <div className="max-w-40 c">
          <img src="/assets/logo-t.png" alt="Grupo Crescent" />
         
        </div>
        <div className="my-3">
          <p className="text-slate-400 text-center">
            2024 Grupo Crescent 2024 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Link
              key={id}
              href={link}
              target="_blank"
              className="text-2xl text-slate-300"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
