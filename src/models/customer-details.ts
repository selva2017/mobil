export interface CustomerDetails {
    createdDate: string;
    currentBalance: string;
    customerGroup: string;
    customerID: string;
    customerType: string;
    gstNo: string;
    name: string;
    receipts: [
        {
            amount: string;
            companyId: string;
            createdDate: string;
            custId: string;
            date: string;
            effectiveDate: string;
            ledgerName: string;
            modifiesDate: string;
            partyLedgerName: string;
            receiptId: string;
            voucherKey: string;
            voucherNumber: string;
            voucherType: string;
        }];
    sales: [
        {
            amount: string;
            companyId: string;
            createdDate: string;
            custId: string;
            date: string;
            effectiveDate: string;
            ledgerName: string;
            modifiesDate: string;
            partyLedgerName: string;
            salesId: string;
            voucherKey: string;
            voucherNumber: string;
            voucherType: string;
        }];
}

// export interface CustomerDetails {
//     companyId: string;
//     createdDate: string;
//     currentBalance: string;
//     customerGroup: string;
//     customerID: string;
//     customerType: string;
//     gstNo: string;
//     name: string;
//     receipts: [
//         {
//             amount: string;
//             companyId: string;
//             createdDate: string;
//             custId: string;
//             date: string;
//             effectiveDate: string;
//             ledgerName: string;
//             modifiesDate: string;
//             partyLedgerName: string;
//             receiptId: string;
//             voucherKey: string;
//             voucherNumber: string;
//             voucherType: string;
//         }];
//     sales: [
//         {
//             amount: string;
//             companyId: string;
//             createdDate: string;
//             custId: string;
//             date: string;
//             effectiveDate: string;
//             ledgerName: string;
//             modifiesDate: string;
//             partyLedgerName: string;
//             salesId: string;
//             voucherKey: string;
//             voucherNumber: string;
//             voucherType: string;
//         }];
// }