import ThreeMetrics from "@/components/ThreeMetrics";

export default function ProblemHook() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                ⚠️ PROBLEMA CRÍTICO DETECTADO
            </div>
            
            <h1 className="headline-font text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            Este es el costo oculto de una página de producto mal diseñada.
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-readable">
            Tus campañas pueden atraer miles de visitas. Pero si tu tasa de conversión se mantiene baja, estás literalmente quemando presupuesto publicitario y dejando ventas sobre la mesa.
            </p>
            <ThreeMetrics />
            <p className="text-lg text-gray-700 font-medium">
            La diferencia entre un 2.0% y un 3.0% de conversión no parece dramática… hasta que aqui lo calculas en dinero real. 👇
            </p>
            </div>
        </div>
    </section>
    );  
}