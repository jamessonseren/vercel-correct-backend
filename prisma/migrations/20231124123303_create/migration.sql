-- AlterTable
ALTER TABLE "partner_cards" ADD COLUMN     "total_installments" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "employer_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "start_day_cycle" INTEGER NOT NULL,
    "cycle_duration" INTEGER NOT NULL,

    CONSTRAINT "employer_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employer_cards_contract_number_key" ON "employer_cards"("contract_number");

-- AddForeignKey
ALTER TABLE "employer_cards" ADD CONSTRAINT "employer_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employer_cards" ADD CONSTRAINT "employer_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
