/*
  Warnings:

  - You are about to drop the column `price` on the `InvoiceRow` table. All the data in the column will be lost.
  - Added the required column `buyPrice` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selPrice` to the `InvoiceRow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceRow" DROP COLUMN "price",
ADD COLUMN     "buyPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "selPrice" DOUBLE PRECISION NOT NULL;
