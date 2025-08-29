"use client";

import { useMemo, useState } from "react";

export default function ContadorRoi() {
    const [monthlyVisitors, setMonthlyVisitors] = useState<number>(5000);
    const [currentConversionPercentage, setCurrentConversionPercentage] = useState<number>(3);
    const [averageProductPrice, setAverageProductPrice] = useState<number>(100);
    const [operationalCostPerProduct, setOperationalCostPerProduct] = useState<number>(0);

    // Valores fijos del plan
    const optimizationInvestment = 1500; // €
    const conversionImprovementPoints = 2; // puntos porcentuales

    const [showResults, setShowResults] = useState<boolean>(false);

    const {
        currentConversionRate,
        projectedConversionRate,
        currentMonthlySales,
        projectedMonthlySales,
        currentMonthlyRevenue,
        projectedMonthlyRevenue,
        salesDelta,
        revenueDelta,
        monthlyProfitDelta,
        annualBenefit,
        roiPercentageFirstYear,
        paybackMonths,
        conversionLiftPercent,
    } = useMemo(() => {
        const currentRate = Math.max(0, currentConversionPercentage) / 100;
        const projectedRate = Math.max(0, currentConversionPercentage + conversionImprovementPoints) / 100;

        const currentSales = Math.round(monthlyVisitors * currentRate);
        const projectedSales = Math.round(monthlyVisitors * projectedRate);

        const currentRevenue = currentSales * averageProductPrice;
        const projectedRevenue = projectedSales * averageProductPrice;

        const perSaleProfit = Math.max(0, averageProductPrice - operationalCostPerProduct);
        const currentProfit = currentSales * perSaleProfit;
        const projectedProfit = projectedSales * perSaleProfit;

        const salesIncrease = projectedSales - currentSales;
        const revenueIncrease = projectedRevenue - currentRevenue;
        const monthlyProfitIncrease = projectedProfit - currentProfit;

        const annualProjectedBenefit = monthlyProfitIncrease * 12;
        const roiFirstYear = optimizationInvestment > 0
            ? ((annualProjectedBenefit - optimizationInvestment) / optimizationInvestment) * 100
            : 0;
        const payback = monthlyProfitIncrease > 0 ? optimizationInvestment / monthlyProfitIncrease : Infinity;

        const liftPercent = currentRate > 0 ? ((projectedRate - currentRate) / currentRate) * 100 : 0;

        return {
            currentConversionRate: currentRate,
            projectedConversionRate: projectedRate,
            currentMonthlySales: currentSales,
            projectedMonthlySales: projectedSales,
            currentMonthlyRevenue: currentRevenue,
            projectedMonthlyRevenue: projectedRevenue,
            salesDelta: salesIncrease,
            revenueDelta: revenueIncrease,
            monthlyProfitDelta: monthlyProfitIncrease,
            annualBenefit: annualProjectedBenefit,
            roiPercentageFirstYear: roiFirstYear,
            paybackMonths: payback,
            conversionLiftPercent: liftPercent,
        };
    }, [
        monthlyVisitors,
        currentConversionPercentage,
        averageProductPrice,
        operationalCostPerProduct,
        conversionImprovementPoints,
        optimizationInvestment,
    ]);

    const formatCurrency = (value: number) => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
    const formatPercent = (value: number, fractionDigits = 1) => `${value.toFixed(fractionDigits)}%`;
    const formatNumber = (value: number) => new Intl.NumberFormat("es-ES").format(value);

    const handleCalculate = () => {
        setShowResults(true);
    };

    return (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 mb-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    🧮 Calcula el ROI de Optimizar tu Página de Producto
                </h2>
                <p className="text-lg text-gray-600 text-center mb-8">
                    Descubre cuánto podrías ganar implementando optimizaciones clave
                </p>

                <div className="calculator-container">
                    {/* Calculator Input */}
                    <div className="bg-white rounded-xl p-4 sm:p-6 card-shadow w-full max-w-2xl mx-auto" id="input-section">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Datos Actuales de tu Negocio</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Visitantes mensuales a tu página de producto
                                </label>
                                <input
                                    type="number"
                                    inputMode="numeric"
                                    value={monthlyVisitors}
                                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tasa de conversión actual (%)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    inputMode="decimal"
                                    value={currentConversionPercentage}
                                    onChange={(e) => setCurrentConversionPercentage(Number(e.target.value))}
                                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Precio promedio del producto (€)
                                </label>
                                <input
                                    type="number"
                                    inputMode="decimal"
                                    value={averageProductPrice}
                                    onChange={(e) => setAverageProductPrice(Number(e.target.value))}
                                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gastos operacionales por producto (€) 
                                    <span className="text-xs text-gray-500">(opcional)</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    inputMode="decimal"
                                    value={operationalCostPerProduct}
                                    onChange={(e) => setOperationalCostPerProduct(Number(e.target.value))}
                                    placeholder="Ej: costos de envío, comisiones, etc."
                                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                                <p className="text-xs text-gray-500 mt-1">Incluye la sumatoria de costos de envío, comisiones de pago, packaging, etc.</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Inversión en optimización
                                </label>
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 sm:p-4 border-2 border-blue-200">
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-blue-800">{formatCurrency(optimizationInvestment)}</div>
                                        <div className="text-base sm:text-lg font-semibold text-gray-700 mt-1">Plan de Optimización Completo</div>
                                        <div className="text-xs sm:text-sm text-blue-600 mt-2">
                                            Mejora proyectada: +{conversionImprovementPoints} puntos porcentuales de conversión
                                        </div>
                                        <div className="text-xs text-gray-600 mt-1">
                                            ✓ Optimización de títulos y descripciones<br />
                                            ✓ Mejora de imágenes y diseño<br />
                                            ✓ Implementación de prueba social<br />
                                            ✓ Optimización de CTAs y garantías
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={handleCalculate}
                                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                            >
                                🧮 Calcular ROI
                            </button>
                        </div>
                    </div>

                    {/* Results Display */}
                    <div
                        className={
                            "bg-white rounded-xl p-4 sm:p-6 card-shadow w-full max-w-2xl mx-auto mt-6 transition-all duration-700 ease-out " +
                            (showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none")
                        }
                        id="results-section"
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">🎯 Resultados de tu Optimización</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">Con nuestra optimización, tu página generará:</p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-2 font-semibold text-xs sm:text-sm">Métrica</th>
                                        <th className="text-center py-2 font-semibold text-xs sm:text-sm">Actual</th>
                                        <th className="text-center py-2 font-semibold text-xs sm:text-sm">Proyectado</th>
                                        <th className="text-center py-2 font-semibold text-green-600 text-xs sm:text-sm">Mejora</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="py-2 sm:py-3 font-medium text-xs sm:text-sm">Tasa de Conversión</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatPercent(currentConversionRate * 100, 1)}</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatPercent(projectedConversionRate * 100, 1)}</td>
                                        <td className="text-center py-2 sm:py-3 text-green-600 font-semibold text-xs sm:text-sm">{formatPercent(conversionLiftPercent, 0)}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 sm:py-3 font-medium text-xs sm:text-sm">Ventas Mensuales</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatNumber(currentMonthlySales)}</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatNumber(projectedMonthlySales)}</td>
                                        <td className="text-center py-2 sm:py-3 text-green-600 font-semibold text-xs sm:text-sm">+{formatNumber(salesDelta)} ventas</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 sm:py-3 font-medium text-xs sm:text-sm">Ingresos Mensuales</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatCurrency(currentMonthlyRevenue)}</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">{formatCurrency(projectedMonthlyRevenue)}</td>
                                        <td className="text-center py-2 sm:py-3 text-green-600 font-semibold text-xs sm:text-sm">+{formatCurrency(revenueDelta)}/mes</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="py-2 sm:py-3 font-bold text-xs sm:text-sm">ROI (Primer Año)</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">-</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">-</td>
                                        <td className="text-center py-2 sm:py-3 text-green-600 font-bold text-sm sm:text-lg">{isFinite(roiPercentageFirstYear) ? `+${formatPercent(roiPercentageFirstYear, 0)}` : "-"}</td>
                                    </tr>
                                    <tr className="bg-blue-50">
                                        <td className="py-2 sm:py-3 font-bold text-xs sm:text-sm">Recuperación de Inversión</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">-</td>
                                        <td className="text-center py-2 sm:py-3 text-xs sm:text-sm">-</td>
                                        <td className="text-center py-2 sm:py-3 text-blue-600 font-bold text-sm sm:text-lg">{isFinite(paybackMonths) ? `${paybackMonths.toFixed(2)} meses` : "N/A"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 rounded-lg">
                            <div className="flex items-center mb-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="font-semibold text-green-800 text-sm sm:text-base">Beneficio Anual Proyectado:</span>
                            </div>
                            <p className="text-xl sm:text-2xl font-bold text-green-800">{formatCurrency(annualBenefit)}</p>
                            <p className="text-xs sm:text-sm text-green-700 mt-1">Basado en un aumento de +{conversionImprovementPoints} pp de conversión</p>
                        </div>

                        {/* Text Explanations */}
                        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                            <div className={"bg-blue-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-400 transition-all duration-500 " + (showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") } id="payback-card">
                                <div className="flex items-start">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">💰 Recuperación de Inversión</p>
                                        <p className="text-blue-700 text-xs sm:text-sm">{isFinite(paybackMonths) ? `Recuperas la inversión en ${paybackMonths.toFixed(2)} meses.` : "Aún no hay recuperación con los datos actuales."}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"bg-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400 transition-all duration-500 " + (showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") } id="sales-card">
                                <div className="flex items-start">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-purple-800 mb-1 text-sm sm:text-base">📈 Impacto en Ventas</p>
                                        <p className="text-purple-700 text-xs sm:text-sm">Ventas mensuales aumentan en +{formatNumber(salesDelta)}.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"bg-green-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-400 transition-all duration-500 " + (showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") } id="revenue-card">
                                <div className="flex items-start">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-green-800 mb-1 text-sm sm:text-base">💵 Ingresos Adicionales</p>
                                        <p className="text-green-700 text-xs sm:text-sm">Ingresos mensuales +{formatCurrency(revenueDelta)} (antes de inversión).</p>
                                    </div>
                                </div>
                            </div>

                            <div className={"bg-yellow-50 rounded-lg p-3 sm:p-4 border-l-4 border-yellow-400 transition-all duration-500 " + (showResults ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") } id="roi-card">
                                <div className="flex items-start">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p className="font-semibold text-yellow-800 mb-1 text-sm sm:text-base">⚡ Retorno de Inversión</p>
                                        <p className="text-yellow-700 text-xs sm:text-sm">ROI del primer año {isFinite(roiPercentageFirstYear) ? `+${roiPercentageFirstYear.toFixed(0)}%` : "N/A"}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}