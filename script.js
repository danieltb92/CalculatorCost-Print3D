function calculate3DPrintCost() {
    // Obtener valores
    const filamentCost = parseFloat(document.getElementById('filamentCost').value);
    const modelWeight = parseFloat(document.getElementById('modelWeight').value);
    const electricCost = parseFloat(document.getElementById('electricCost').value);
    const printTime = parseFloat(document.getElementById('printTime').value);
    const printerDepreciation = parseFloat(document.getElementById('printerDepreciation').value);
    const computerDepreciation = parseFloat(document.getElementById('computerDepreciation').value);
    const maintenanceCost = parseFloat(document.getElementById('maintenanceCost').value);
    const prepTime = parseFloat(document.getElementById('prepTime').value);
    const postProcessing = parseFloat(document.getElementById('postProcessing').value);
    const profitMargin = parseFloat(document.getElementById('profitMargin').value);
    const tax = parseFloat(document.getElementById('tax').value);

    // Cálculos
    const materialCost = (filamentCost / 1000) * modelWeight;
    const energyCost = electricCost * printTime * 0.3; // 0.3 kWh por hora
    const depreciationCost = (printerDepreciation + computerDepreciation) * printTime;
    const maintenancePerHour = maintenanceCost / (30 * 24); // Supongamos 30 días x 24 horas
    const maintenanceTotal = maintenancePerHour * printTime;
    const otherCosts = prepTime * 5 + postProcessing;

    const baseCost = materialCost + energyCost + depreciationCost + maintenanceTotal + otherCosts;
    const profit = baseCost * (profitMargin / 100);
    const taxAmount = (baseCost + profit) * (tax / 100);
    const totalCost = baseCost + profit + taxAmount;

    // Mostrar resultados
    document.getElementById('totalMaterialCost').textContent = `Costo del Material: $${materialCost.toFixed(2)}`;
    document.getElementById('totalEnergyCost').textContent = `Costo de Energía: $${energyCost.toFixed(2)}`;
    document.getElementById('totalMaintenanceCost').textContent = `Costo de Mantenimiento: $${maintenanceTotal.toFixed(2)}`;
    document.getElementById('totalOtherCosts').textContent = `Otros Costos: $${otherCosts.toFixed(2)}`;

}
