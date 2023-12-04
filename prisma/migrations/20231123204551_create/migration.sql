-- CreateTable
CREATE TABLE "partner_cards" (
    "id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "card_id" TEXT NOT NULL,
    "company_type_id" TEXT NOT NULL,
    "start_date_cycle" TIMESTAMP(3) NOT NULL,
    "end_date_cycle" TIMESTAMP(3) NOT NULL,
    "adm_correct_fee" DOUBLE PRECISION NOT NULL,
    "mkt_correct_fee" DOUBLE PRECISION NOT NULL,
    "cashback" DOUBLE PRECISION NOT NULL,
    "correct_admin_id" TEXT NOT NULL,

    CONSTRAINT "partner_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "partner_cards_contract_number_key" ON "partner_cards"("contract_number");

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_company_type_id_fkey" FOREIGN KEY ("company_type_id") REFERENCES "company_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
