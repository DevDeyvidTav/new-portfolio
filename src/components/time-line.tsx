import { CardExperience } from "./card-experience";

export function TimeLine() {
    return (
        <div className="w-full min-h-screen mt-10">
            <div className="md:max-w-[1140px] mx-auto">
                <h2 className="text-white pl-20 text-xl md:text-3xl font-bold underline ">
                    Minha experiência
                </h2>
                <CardExperience />
            </div>
        </div>
    )
}