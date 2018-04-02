export interface ProdStatistics {
    monthlySales: string;
    stockYear: string;
    quarterlySales: string;
    yearlySales: string;
    monthlyProduction: string;
    quarterlyProduction: string;
    yearlyProduction: string;
    productionSummaryByMonth: [
        {
            month: string;
            amount: number;
        }];
    salesSummaryByMonth: [
        {
            month: string;
            amount: number;
        }];
    productionSummaryByYear: [
        {
            year: number;
            amount: number;
        }];
    salesSummaryByYear: [
        {
            year: number;
            amount: number;
        }];

}