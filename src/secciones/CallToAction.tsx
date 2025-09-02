export default function CallToAction() {
    return (
    <section className ="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-8">🎯 ACCIÓN: Transforma tu funnel hoy</h3>
                
                <div className="bg-white bg-opacity-10 p-8 rounded-xl mb-8">
                    <p className="text-xl mb-6 leading-relaxed text-gray-600">
                        No se trata de gastar más en ads. Se trata de <strong>hacer que cada clic valga más</strong>.
                    </p>
                    <p className="text-lg mb-6 text-gray-600">
                        En <strong>The Perfect Product Page</strong> diseñamos y optimizamos <strong>product pages</strong> 
                        con un solo objetivo: multiplicar tu tasa de conversión y tu retorno de inversión.
                    </p>
                </div>

                <div className ="space-y-6 ">
                    <p className="text-xl">
                        👉 ¿Quieres descubrir cuánto puedes estar perdiendo hoy mismo por no optimizar tu página de producto?
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="cta-button text-white px-8 py-4 rounded-lg text-lg font-semibold w-full sm:w-auto">
                            📩 Habla con nosotros ahora
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors w-full sm:w-auto">
                            📊 Ver casos de éxito
                        </button>
                    </div>
                    
                        <p className="text-sm opacity-75 mt-4">
                        Transforma tu funnel en una máquina de conversión
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
}