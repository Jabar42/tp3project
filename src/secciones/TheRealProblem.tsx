"use client";

import { useEffect, useState } from "react";
import AuthorShare from "@/components/AuthorShare";

export default function TheRealProblem() {

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
<AuthorShare />



            <div className="text-readable text-lg text-gray-700 space-y-6 mb-12">
                <p>
                La diferencia entre un 2.0% y un 3.0% de conversión parece mínima a simple vista.
                Pero cuando lo traducimos en ventas y en retorno de inversión, la diferencia es un antes y un después en tu negocio.
                </p>
                <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Mejoras modestas (5–15% relativas) son alcanzables con ajustes puntuales en el diseño, copywriting y velocidad.</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Mejoras intermedias (20–50%) se logran al eliminar fricciones en el checkout, formularios o navegación móvil.</span>
                        </div>

                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Mejoras radicales (+100%) aparecen cuando reconstruimos por completo un funnel defectuoso.</span>
                        </div>


                <p>
                    Inviertes en publicidad y el tráfico llega, pero las ventas no. Trabajas 12 horas diarias 
                    pero tus ingresos se mantienen estancados. Ves a tu competencia crecer mientras tú luchas 
                    por mantener la cabeza fuera del agua.
                </p>

                <div className="problem-highlight p-8 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">El problema NO es tu producto, ni tu experiencia, ni tu dedicación.</h3>
                    <p className="text-lg font-medium text-gray-800">
                        El problema es que estás compitiendo en el mercado digital del 2024 
                        con herramientas y estrategias del 2010.
                    </p>
                </div>

                <p>
                    Mientras tú envías emails uno por uno, tu competencia tiene sistemas automatizados trabajando 24/7. 
                    Mientras tú pierdes el 95% de tus visitantes por una web lenta, ellos convierten al 18% 
                    con funnels optimizados.
                </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">
                    ¿Te Identificas Con Alguna De Estas Situaciones?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Tu web tarda más de 5 segundos en cargar y pierdes visitantes constantemente</span>
                        </div>
                        <div className="flex items-start">
                                <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Menos del 2% de tus visitantes se convierten en clientes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Gastas €1,000+ mensuales en ads pero apenas consigues clientes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Trabajas más de 50 horas semanales en tareas repetitivas</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Haces todo manualmente: emails, seguimientos, facturas</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Tus ingresos dependen 100% de tu tiempo personal</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>No puedes tomarte vacaciones sin que tu negocio se pare</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-red-500 mr-3 mt-1 text-xl">•</span>
                            <span>Sientes que trabajas MÁS pero ganas MENOS cada año</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
}