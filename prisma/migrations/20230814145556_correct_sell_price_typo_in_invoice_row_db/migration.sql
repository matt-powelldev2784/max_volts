/*
  Warnings:

  - You are about to drop the column `selPrice` on the `InvoiceRow` table. All the data in the column will be lost.
  - Added the required column `sellPrice` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceRow" DROP COLUMN "selPrice",
ADD COLUMN     "sellPrice" DOUBLE PRECISION NOT NULL;
