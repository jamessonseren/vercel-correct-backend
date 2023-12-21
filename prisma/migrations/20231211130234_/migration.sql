/*
  Warnings:

  - A unique constraint covering the columns `[card_id]` on the table `employer_cards` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "app_user_data" ADD COLUMN     "employee" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "employer_cards" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "partner_cards" ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "company_business_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "adm_correct_fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "mkt_correct_fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_installments" INTEGER NOT NULL DEFAULT 1,
    "cashback" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "validate" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "company_business_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_business_cards_contract_number_key" ON "company_business_cards"("contract_number");

-- CreateIndex
CREATE UNIQUE INDEX "employer_cards_card_id_key" ON "employer_cards"("card_id");

-- AddForeignKey
ALTER TABLE "company_business_cards" ADD CONSTRAINT "company_business_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_business_cards" ADD CONSTRAINT "company_business_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
