/*
  Warnings:

  - Added the required column `VAT` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceRow" ADD COLUMN     "VAT" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;
