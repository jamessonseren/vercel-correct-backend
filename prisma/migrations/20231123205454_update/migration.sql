-- DropForeignKey
ALTER TABLE "partner_cards" DROP CONSTRAINT "partner_cards_correct_admin_id_fkey";

-- AlterTable
ALTER TABLE "partner_cards" ALTER COLUMN "correct_admin_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "partner_cards" ADD CONSTRAINT "partner_cards_correct_admin_id_fkey" FOREIGN KEY ("correct_admin_id") REFERENCES "correct_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
