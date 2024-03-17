import { Button } from "@material-tailwind/react";

export function ButtonRounded() {
    return (
        <div className="flex gap-4 p-0 m-0 w-screen  ">
            <div className=" w-screen bg-gray-400">
                <div className=" text-white font-bold"></div>
                <div className="text-lg text-bold flex flex-col justify-evenly gap-4 p-5 m-5">
                    <p>Address: Education Point Ada in Naini, Prayagraj</p>
                    <p>Phone: 9924-344-7421</p>
                    <p>gmail: EducationPoint@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
