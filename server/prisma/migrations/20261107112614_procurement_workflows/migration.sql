/*
  Warnings:

  - Added the required column `workspaceId` to the `CostBreakdown` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CostBreakdown" ADD COLUMN     "product" TEXT,
ADD COLUMN     "supplierId" TEXT,
ADD COLUMN     "workspaceId" TEXT NOT NULL,
ALTER COLUMN "orderId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProcurementOrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ProcurementOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProcurementOrderItem_orderId_idx" ON "ProcurementOrderItem"("orderId");

-- CreateIndex
CREATE INDEX "CostBreakdown_workspaceId_createdAt_idx" ON "CostBreakdown"("workspaceId", "createdAt");

-- CreateIndex
CREATE INDEX "CostBreakdown_supplierId_idx" ON "CostBreakdown"("supplierId");

-- AddForeignKey
ALTER TABLE "ProcurementOrderItem" ADD CONSTRAINT "ProcurementOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "ProcurementOrder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
