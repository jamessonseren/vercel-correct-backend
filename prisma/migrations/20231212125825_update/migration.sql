-- DropForeignKey
ALTER TABLE "app_user_accounts" DROP CONSTRAINT "app_user_accounts_employer_cards_id_fkey";

-- AlterTable
ALTER TABLE "app_user_accounts" ALTER COLUMN "employer_cards_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "app_user_accounts" ADD CONSTRAINT "app_user_accounts_employer_cards_id_fkey" FOREIGN KEY ("employer_cards_id") REFERENCES "employer_cards"("id") ON DELETE SET NULL ON UPDATE CASCADE;
