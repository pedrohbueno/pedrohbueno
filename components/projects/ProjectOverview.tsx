import { Linkedin, Mail, ArrowRight, Github, Computer, Calendar, Redo } from "lucide-react";
import { Project } from "@/data/projects";

export default function ProjectOverview({ project }: { project: Project}){
    return(<section id="Inicio" className="section-shell grid min-h-screen items-center gap-16 pt-12 pb-20 lg:grid-cols-2 lg:pt-24">
        <div className="animate-fade-up">
            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
            </h1>
            <h1 className="pt-8">{project.description}</h1>

            <div className="flex gap-3">
            <a
                href="#"
                className="rounded-lg bg-gray-950 px-5 py-3"
            >
                <div className="flex items-center gap-2"><Github className="rounded-lg bg-white fill-black" size={20}/><p>Ver no GitHub</p></div>
            </a>

            <a
                href="#"
                className="rounded-lg border px-5 py-3"
            >
                <div className="flex items-center gap-2"><Computer size={20}/><p>Ver Demonstração</p></div>
            </a>
            </div>

            <div className="flex gap-10 m-5">
                <div className="flex items-center gap-2">
                    <Calendar size={20}/>
                    <p>Criado em</p>
                </div>
                <div className="flex items-center gap-2">
                    <Redo size={20}/>
                    <p>Criado em</p>
                </div>
                {/* <div className="flex items-center gap-2">
                    <Calendar size={20}/>
                    <p>Criado em</p>
                </div> */}
            </div>

        </div>
    </section>)
}