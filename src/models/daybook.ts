export interface Daybook {
    voucherType: string;
    // voucherAction: string;
    voucherDate: string;
    // voucherTypeName: string;
    voucherNumber: string;
    partyLedgerName: string;
    voucherKey: string;
    effectiveDate: string;
    // persistedView: string;
    // alterId: string;
    masterId: string;
    // ledgerName: string;
    checkFlag: string;
    ledgerEntryVOs: [
        {
            ledgerName: string;
            amount: string;
            voucherKey: string;
            id: string;
        }];
    inventoryEntryVOs: [
        {
            voucherKey: string;
            ledgerName: string;
            stockItemName: string;
            rate: string;
            amount: string;
            billedQuantity: string;
            id: string;
        }];
}